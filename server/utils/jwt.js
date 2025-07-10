import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: "14m",
  });
};
const generateRefreshToken = (user) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    expiresIn: "7d",
  });
};

export const decodeRefreshToken = (token) => {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtRefreshSecret);
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const decodeAccessToken = (token) => {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtAccessSecret);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  return {
    accessToken,
    refreshToken,
  };
};

export const sendRefreshToken = (event, token) => {
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: "Strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
};
