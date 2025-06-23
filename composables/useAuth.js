export default () => {
  // States
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");

  // Helper functions
  const setToken = (newToken) => {
    const authToken = useAuthToken();

    authToken.value = newToken;
  };

  const setUser = (newUser) => {
    const authUser = useAuthUser();

    authUser.value = newUser;
  };

  // functions
  const login = ({ username, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch(`/api/auth/login`, {
          method: "POST",
          body: {
            username,
            password,
          },
        });

        setToken(data.access_token);
        setUser(data.user);

        resolve(true);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  return {
    login,
    useAuthUser,
    useAuthToken,
  };
};
