import prisma from "~/lib/prisma";

export const createTweet = async (data) => {
  return prisma.tweet.create({
    data,
  });
};

export const getTweets = async (params = {}) => {
  return prisma.tweet.findMany(params);
};
