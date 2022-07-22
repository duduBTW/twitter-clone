import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.userTwitter.create({
    data: {
      id: "rr_ronron",
      name: "소융 SoyooNG/ソユン",
      profilePicture:
        "https://pbs.twimg.com/profile_images/1497604401841590274/cWgzsF21_400x400.jpg",
      // User: {
      //   connect: {
      //     id: "cl5wgvo1u0804iou79fxfdsj6",
      //   },
      // },
      user: {
        connect: {
          id: "cl5wmd31d0014fsu7jgshtrmn",
        },
      },
    },
  });

  res.status(200).send("created!");
}
