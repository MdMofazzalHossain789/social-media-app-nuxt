import prisma from "~/lib/prisma";

export const createRefreshToken = async (refreshToken) => {
  return prisma.refreshToken.create({
    data: refreshToken,
  });
};

export const getRefreshTokenByToken = async (token) => {
  return prisma.refreshToken.findUnique({
    where: { token },
  });
};
