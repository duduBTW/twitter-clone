import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.tweet.create({
    data: {
      content: {
        create: [
          {
            type: "text",
            src: "🟥RED",
          },
          {
            type: "image",
            src: "https://pbs.twimg.com/media/FVQ3GNpaAAE5Ap6?format=jpg&name=4096x4096",
          },
        ],
      },
      UserTwitter: {
        connect: {
          id: "rr_ronron",
        },
      },
      retweeted: true,
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
