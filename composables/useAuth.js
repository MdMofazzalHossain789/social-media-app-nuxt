import { jwtDecode } from "jwt-decode";
import useFetchApi from "./useFetchApi";

export default () => {
  // States
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");
  const useAuthLoading = () => useState("auth_loading", () => true);

  // Helper functions
  const setToken = (newToken) => {
    const authToken = useAuthToken();

    authToken.value = newToken;
  };

  const setUser = (newUser) => {
    const authUser = useAuthUser();

    authUser.value = newUser;
  };

  const setIsAuthLoading = (value) => {
    const authLoading = useAuthLoading();

    authLoading.value = value;
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

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch(`/api/auth/refresh`);

        setToken(data.access_token);
        resolve(true);
      } catch (error) {
        console.log(error);

        reject(error);
      }
    });
  };
  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await useFetchApi(`/api/auth/user`);

        console.log("get user", data);

        setUser(data.user);
        resolve(true);
      } catch (error) {
        console.log(error);

        reject(error);
      }
    });
  };

  const reRefreshAccessToken = () => {
    const authToken = useAuthToken();

    if (!authToken.value) {
      return;
    }

    const jwt = jwtDecode(authToken.value);

    const newRefreshTime = jwt.exp - 60000;

    setTimeout(async () => {
      await refreshToken();
      reRefreshAccessToken();
    }, newRefreshTime);
  };

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      setIsAuthLoading(true);
      try {
        await refreshToken();

        await getUser();

        reRefreshAccessToken();

        resolve(true);
      } catch (error) {
        console.log(error);

        reject(error);
      } finally {
        setIsAuthLoading(false);
      }
    });
  };

  return {
    login,
    useAuthUser,
    useAuthToken,
    initAuth,
    useAuthLoading,
  };
};
