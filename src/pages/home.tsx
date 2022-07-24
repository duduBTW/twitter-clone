import type { GetServerSideProps, NextPage } from "next";
import { prisma } from "utils/prisma";

// components
import CreateTweetForm from "components/createTweetForm";
import Feed from "components/feed";
import Title from "components/title";
import getLoggedUser from "utils/getLoggedUser";

interface Props {
  feed: TweetProps[];
}

const Home: NextPage<Props> = ({ feed }) => {
  console.log(feed);

  return (
    <>
      <Title>Home page</Title>
      <CreateTweetForm />
      <Feed tweetsProps={feed} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  res,
}) => {
  const session = await getLoggedUser(req, res);
  if (!session)
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };

  const feedPrisma = await prisma.tweet.findMany({
    include: {
      images: true,
      userTwitter: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    props: {
      feed: JSON.parse(JSON.stringify(feedPrisma)),
      session,
    },
  };
};

export interface UserProps {
  id: string;
  name: string | null;
  profilePicture: string | null;
  profileCover: string | null;
}

export interface TweetProps {
  id: number;
  description: string | null;
  retweeted: boolean | null;
  liked: boolean | null;
  userTwitter: UserProps;
  createdAt: Date;
  images: ImageProps[];

  // todo
  answering: TweetProps | null;
  answers: TweetProps[];
}

export type ImageProps = {
  id: string;
  src: string;
};

export default Home;
