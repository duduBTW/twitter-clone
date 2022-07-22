import type { GetServerSideProps, NextPage } from "next";
import { TweetProps } from "pages/home";
import { prisma } from "utils/prisma";

// components
import Tweet from "components/tweet";
import Title from "components/title";
import Link from "next/link";

interface Props {
  tweet: TweetProps;
}

const UserTweet: NextPage<Props> = ({ tweet }) => {
  return (
    <>
      <Title>
        <Link href="/home" scroll={false}>
          <i className="ri-arrow-left-line" />
        </Link>
        <div>Tweet</div>
      </Title>
      <Tweet fullHeight tweet={tweet} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const id = query["tweetId"];
  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  const tweet = await prisma.tweet.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      user: true,
      content: true,
    },
  });

  if (!tweet)
    return {
      notFound: true,
    };

  return {
    props: {
      tweet: JSON.parse(JSON.stringify(tweet)),
    },
  };
};

export default UserTweet;
