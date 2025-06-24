import prisma from "~/lib/prisma";

export const createMediaFile = async (data) => {
  return prisma.mediaFile.create({
    data,
  });
};
