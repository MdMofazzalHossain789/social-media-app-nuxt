import bcrypt from "bcrypt";
import prisma from "~/lib/prisma";

export const createUser = async (userData) => {
  const data = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return prisma.user.create({
    data,
  });
};

export const getUserByUsername = async (username) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};

export const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};
