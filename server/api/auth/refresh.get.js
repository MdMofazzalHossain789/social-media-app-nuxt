import { getRefreshTokenByToken } from "~/server/db/refreshToken";
import { getUserById } from "~/server/db/user";
import { decodeRefreshToken } from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);

  const refreshToken = cookies.refresh_token;

  if (!refreshToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Invalid refresh token",
      })
    );
  }

  const rToken = await getRefreshTokenByToken(refreshToken);

  if (!rToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Invalid refresh token",
      })
    );
  }

  const token = decodeRefreshToken(refreshToken);
  try {
    const user = await getUserById(token.userId);

    const { accessToken } = generateTokens(user);

    return {
      access_token: accessToken,
    };
  } catch (error) {
    console.log(error);

    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Something went wrong",
      })
    );
  }
});
