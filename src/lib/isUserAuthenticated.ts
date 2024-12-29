import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const isUserAuthenticated = async () => {
  const session = await auth();
  if (!session) return redirect("/");
  return session?.user;
};
