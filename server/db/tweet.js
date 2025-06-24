import prisma from "~/lib/prisma";

export const createTweet = async (data) => {
  return prisma.tweet.create({
    data,
  });
};
