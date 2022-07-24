import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // await prisma.tweet.create({
  //   data: {
  //     userTwitter: {
  //       connect: {
  //         id: "rr_ronron",
  //       },
  //     },
  //     answering: {
  //       connect: {
  //         id: 4,
  //       },
  //     },
  //     description: "シナモロールx初音ミクコラボのデザインを参考にしました。",
  //   },
  // });

  await prisma.tweet.create({
    data: {
      images: {
        create: {
          src: "https://pbs.twimg.com/media/FIoFWesagAUn0dy?format=jpg&name=4096x4096",
        },
      },
      userTwitter: {
        connect: {
          id: "rr_ronron",
        },
      },
      liked: true,
      retweeted: true,
      description: "2022",
    },
  });

  // await prisma.tweet.create({
  //   data: {
  //     content: {
  //       create: {
  //         type: "image",
  //         src: "https://pbs.twimg.com/media/FYB55VyaIAEg9cX?format=jpg&name=large",
  //       },
  //     },
  //     user: {
  //       connect: {
  //         id: "dudubtway",
  //       },
  //     },
  //     retweeted: false,
  //   },
  // });

  res.status(200).send("created!");
}
