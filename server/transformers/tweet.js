export const tweetTransformer = (tweet) => {
  const { text, authorId, replyToId } = tweet;

  return {
    text,
    authorId,
    replyToId,
  };
};
