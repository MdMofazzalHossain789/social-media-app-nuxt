import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, name, email, password, confirmPassword } = body;

  if (!username || !name || !email || !password || !confirmPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Please provide all the required fields",
      })
    );
  }

  if (password !== confirmPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Passwords do not match",
      })
    );
  }

  const userData = {
    username,
    email,
    name,
    password,
  };

  const user = await prisma.user.create({ data: userData });

  return {
    user,
  };
});
