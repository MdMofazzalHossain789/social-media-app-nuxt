import formidable from "formidable";
import { uploadToCloudinary } from "~/server/utils/cloudinary";
import { createMediaFile } from "~/server/db/mediaFile";
import { createTweet } from "~/server/db/tweet";

export default defineEventHandler(async (event) => {
  const form = formidable({});

  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

  const userId = event.context?.auth?.user?.id;

  const tweet = await createTweet({
    text: fields.text?.[0],
    authorId: userId,
  });

  // Get all uploaded files (supports multiple keys)
  const fileArray = Object.values(files).flat();

  const filePromises = fileArray.map(async (file) => {
    const result = await uploadToCloudinary(file.filepath);

    return createMediaFile({
      url: result.secure_url,
      providerPublicId: result.public_id,
      userId,
      tweetId: tweet.id,
    });
  });

  await Promise.all(filePromises);

  return {
    status: "success",
    tweet,
  };
});
