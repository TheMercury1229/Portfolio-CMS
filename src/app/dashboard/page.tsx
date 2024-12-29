import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import UploadImageButton from "@/components/UploadImageButton";
import { isUserAuthenticated } from "@/lib/isUserAuthenticated";
import React from "react";

const page = async () => {
  await isUserAuthenticated();
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>Logout</Button>
      </form>
      <UploadImageButton />
    </div>
  );
};

export default page;
