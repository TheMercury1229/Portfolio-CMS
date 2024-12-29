import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }
  return (
    <main className="flex items-center justify-center min-h-screen">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button>Continue with Google</Button>
      </form>
    </main>
  );
}
