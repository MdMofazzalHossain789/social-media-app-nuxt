import prisma from "~/lib/prisma";

export const createRefreshToken = async (refreshToken) => {
  return prisma.refreshToken.create({
    data: refreshToken,
  });
};
