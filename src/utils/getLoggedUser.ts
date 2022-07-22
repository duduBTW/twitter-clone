import type { GetServerSidePropsContext } from "next";
import { unstable_getServerSession } from "next-auth";
import { prisma } from "utils/prisma";
import { authOptions } from "../pages/api/auth/[...nextauth]";

const getLoggedUser = async (
  req: GetServerSidePropsContext["req"],
  res: GetServerSidePropsContext["res"]
) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) return null;

  const user = await prisma.userTwitter.findFirst({
    where: {
      userId: session.user.id,
    },
  });

  return user;
};

export default getLoggedUser;
