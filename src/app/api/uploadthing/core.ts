import { isUserAuthenticated } from "@/lib/isUserAuthenticated";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "8MB",
    },
  })
    .middleware(async ({ req }) => {
      const user = await isUserAuthenticated();

      if (!user?.id) throw new UploadThingError("Unauthorized to upload image");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      //   console.log("Upload complete for userId:", metadata.userId);
      //   console.log("file url", file.url);
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
