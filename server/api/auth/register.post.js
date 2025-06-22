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
  return {
    body,
  };
});
