export const useTweet = () => {
  const createTweet = async (formdata) => {
    const form = new FormData();

    form.append("text", formdata.text);

    return useFetchApi("/api/user/tweets", {
      method: "POST",
      body: form,
    });
  };

  const getTweets = async () => {
    return useFetchApi("/api/tweets");
  };

  return {
    createTweet,
    getTweets,
  };
};
