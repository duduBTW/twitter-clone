import type { GetServerSideProps, NextPage } from "next";
import { prisma } from "utils/prisma";

// components
import CreateTweetForm from "components/createTweetForm";
import Feed from "components/feed";
import Title from "components/title";
import getLoggedUser from "utils/getLoggedUser";

interface Props {
  feed: TweetProps[];
  session: UserProps;
}

export interface UserProps {
  id: string;
  name: string | null;
  profilePicture: string | null;
  profileCover: string | null;
}

export interface TweetProps {
  id: number;
  retweeted: boolean | null;
  liked: boolean | null;
  UserTwitter: UserProps;
  createdAt: Date;
  content: TweetContent[];

  // todo
  // answering: any[];
  // answers: any[];
}

export type TweetContent = {
  type: string;
  html: string | null;
  src: string | null;
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
      content: true,
      UserTwitter: true,
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

const Home: NextPage<Props> = ({ session, feed }) => {
  return (
    <>
      <Title>Home page</Title>
      <CreateTweetForm avatarSrc={session.profilePicture} />
      <Feed tweetsProps={feed} />
    </>
  );
};

export default Home;
