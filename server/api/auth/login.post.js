import { getUserByUsername } from "~/server/db/user";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import { userTransformer } from "~/server/transformers/user";
import { createRefreshToken } from "~/server/db/refreshToken";

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Please provide all the required fields",
      })
    );
  }

  // is user registered
  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Wrong credentials",
      })
    );
  }

  // compare password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Incorrect password",
      })
    );
  }

  // generate tokens
  // access token & refresh token
  const { accessToken, refreshToken } = generateTokens(user);

  // save tokens in db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  // add http only cookie
  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
