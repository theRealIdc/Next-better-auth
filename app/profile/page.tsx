import { SignOutButton } from "@/components/sign-out-button";
import { auth } from "@/lib/auth";
import { Sign } from "crypto";
import { headers } from "next/headers";
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
      <SignOutButton />
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
