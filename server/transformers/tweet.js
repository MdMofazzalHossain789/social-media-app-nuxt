import { mediaFileTransformer } from "./mediaFile";
import { userTransformer } from "./user";
import human from "human-time";

export const tweetTransformer = (tweet) => {
  const { id, text, authorId, replyToId } = tweet;

  return {
    id,
    text,
    authorId,
    replyToId,
    author: tweet.author ? userTransformer(tweet.author) : null,
    replyTo: tweet.replyTo ? tweetTransformer(tweet.replyTo) : null,
    mediaFiles: tweet.mediaFiles
      ? tweet.mediaFiles.map(mediaFileTransformer)
      : [],
    replies: tweet.replies ? tweet.replies.map(tweetTransformer) : [],
    repliesCount: tweet.replies ? tweet.replies.length : 0,
    createdAt: human(tweet.createdAt),
  };
};
