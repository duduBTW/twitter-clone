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
  //         id: "xx_Chon_xx",
  //       },
  //     },
  //     answering: {
  //       connect: {
  //         id: 4,
  //       },
  //     },
  //     description: `ずっと描きたかったので満足･v･*☁️☁️
  //     シナミクさん最高かわいいね......👼`,
  //   },
  // });

  await prisma.tweet.create({
    data: {
      images: {
        create: [
          {
            src: "https://pbs.twimg.com/media/E-hQWIPVEAUfRTF?format=jpg&name=medium",
          },
          {
            src: "https://pbs.twimg.com/media/E-hQIaqUcAAdT20?format=jpg&name=medium",
          },
        ],
      },
      userTwitter: {
        connect: {
          id: "xx_Chon_xx",
        },
      },
      liked: true,
      retweeted: true,
      description: `シナモンミクさん。。。☁️𓈒𓏸
      #初音ミク`,
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
