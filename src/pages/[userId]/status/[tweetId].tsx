import type { GetServerSideProps, NextPage } from "next";
import { TweetProps } from "pages/home";
import { prisma } from "utils/prisma";
import getLoggedUser from "utils/getLoggedUser";

// components
import Title from "components/title";
import Link from "next/link";
import TweetStatus from "components/tweet/status";
import Feed from "components/feed";
import TweetCard from "components/tweet/card";

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
        Tweet
      </Title>
      {tweet.answering && <TweetCard insideTimeline tweet={tweet.answering} />}
      <TweetStatus {...tweet} />
      <Feed tweetsProps={tweet.answers} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
  req,
  res,
}) => {
  const id = query["tweetId"];
  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  const session = await getLoggedUser(req, res);

  const tweet = await prisma.tweet.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      userTwitter: true,
      images: true,
      answering: {
        include: {
          userTwitter: true,
          images: true,
        },
      },
      answers: {
        include: {
          userTwitter: true,
          images: true,
        },
      },
    },
  });

  console.log("tweet", tweet);

  if (!tweet)
    return {
      notFound: true,
    };

  return {
    props: {
      tweet: JSON.parse(JSON.stringify(tweet)),
      session,
    },
  };
};

export default UserTweet;
