import { TweetProps, UserProps } from "pages/home";
import type { GetServerSideProps, NextPage } from "next";
import { prisma } from "utils/prisma";

// components
import Title from "components/title";
import Link from "next/link";
import UserHeader from "components/user/profile/header";
import UserProfileTabs from "components/user/profile/tabs";
import getLoggedUser from "utils/getLoggedUser";

interface Props {
  user: UserProps;
  tweets: TweetProps[];
}

const User: NextPage<Props> = ({ user, tweets }) => {
  return (
    <div>
      <Title>
        <Link href="/home" scroll={false}>
          <i className="ri-arrow-left-line" />
        </Link>
        <div>{user.id}</div>
      </Title>
      <UserHeader user={user} />
      <UserProfileTabs tweets={tweets} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
  req,
  res,
}) => {
  const id = query["userId"];
  if (typeof id !== "string" || !isNaN(Number(id))) {
    return {
      notFound: true,
    };
  }

  const session = await getLoggedUser(req, res);
  const user = await prisma.userTwitter.findFirst({
    where: {
      id,
    },
  });

  const tweets = await prisma.tweet.findMany({
    where: {
      userTwitterId: id,
    },
    include: {
      UserTwitter: true,
      content: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!user || !tweets) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
      tweets: JSON.parse(JSON.stringify(tweets)),
      session,
    },
  };
};

export default User;
