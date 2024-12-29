import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function page() {
  return (
    <Card className="mt-32 max-w-4xl mx-auto w-[90%] md:w-full">
      <CardHeader className="flex flex-col gap-2 items-center text-center">
        <CardTitle className="text-3xl md:text-4xl">
          🛑 Whoa there, partner!
        </CardTitle>
        <CardDescription className="text-base sm:text-xl">
          Looks like you’ve wandered into forbidden territory. This page is
          off-limits!
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm md:text-lg flex flex-col gap-1">
        <p className="text-base sm:text-xl font-bold">Hints:</p>
        <p>• Did you forget your secret handshake? 🤔</p>
        <p>
          • Try logging in with the right credentials or head back to the{" "}
          <Link href={"/"} className="font-bold hover:underline inline-block">
            Home Page{" "}
          </Link>{" "}
          before the bouncers show up.
        </p>
        <Button asChild>
          <Link href="/" className="w-fit mx-auto mt-5">
            Go Home
          </Link>
        </Button>
      </CardContent>
      <CardFooter className="text-center mx-auto text-muted-foreground">
        <p className="text-center mx-auto">
          P.S.: Don’t worry, we still like you. 😄
        </p>
      </CardFooter>
    </Card>
  );
}
