import formidable from "formidable";
import { createMediaFile } from "~/server/db/mediaFile";
import { createTweet } from "~/server/db/tweet";
import { uploadToCloudinary } from "~/server/utils/cloudinary";

export default defineEventHandler(async (event) => {
  const form = formidable({});

  const response = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err);
      }

      resolve({ fields, files });
    });
  });

  const { fields, files } = response;

  const userId = event.context?.auth?.user?.id;

  console.log(fields);

  const tweetData = {
    text: fields.text[0],
    authorId: userId,
  };

  const replyTo = fields.replyTo;

  if (replyTo) {
    tweetData.replyToId = replyTo;
  }

  const tweet = await createTweet(tweetData);

  // Get all uploaded files (supports multiple keys)
  const fileArray = Object.values(files).flat();
  const filePromises = fileArray.map(async (file) => {
    const result = await uploadToCloudinary(file.filepath);
    console.log(result);
    return createMediaFile({
      url: result.secure_url,
      providerPublicId: result.public_id,
      userId,
      tweetId: tweet.id,
    });
  });

  await Promise.all(filePromises);

  return {
    body: tweet,
  };
});
