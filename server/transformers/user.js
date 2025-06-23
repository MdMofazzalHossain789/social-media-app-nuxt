export const userTransformer = (user) => {
  const { id, name, email, username, profilePicture } = user;

  return {
    id,
    name,
    email,
    username,
    profilePicture,
  };
};
