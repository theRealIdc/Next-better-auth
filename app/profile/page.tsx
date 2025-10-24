import { SignOutButton } from "@/components/sign-out-button";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { Sign } from "crypto";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return redirect("/auth/login");
  }
  return (
    <div className="container mx-auto max-w-screen-lg py-2">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Profile</h1>
      </div>
      <div className="flex gap-2">
        <SignOutButton />
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Button>Home</Button>
        </Link>
      </div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
