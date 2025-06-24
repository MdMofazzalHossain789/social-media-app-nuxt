import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import { getUserById } from "../db/user";

export default defineEventHandler(async (event) => {
  const endpoints = ["/api/auth/user", "/api/user/tweets"];

  const isHandledByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);
    const pathname = getRequestURL(event).pathname;
    return pattern.match(pathname);
  });

  if (!isHandledByThisMiddleware) {
    return;
  }

  const headers = getRequestHeaders(event);

  const authHeader = headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Authorization header malformed or missing",
      })
    );
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Token missing in Authorization header",
      })
    );
  }

  const decoded = decodeAccessToken(token);

  if (!decoded) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized access",
      })
    );
  }

  try {
    const userId = decoded.userId; // Fixed typo here
    const user = await getUserById(userId);

    event.context.auth = {
      user,
    };
  } catch (error) {
    return;
  }
});
