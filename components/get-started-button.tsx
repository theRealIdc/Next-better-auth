"use client";

import { useSession } from "@/lib/auth-client";
import { Button } from "./ui/button";
import Link from "next/link";

export const GetStartedButton = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return (
      <Button size="lg" className="opacity-60">
        Get Started
      </Button>
    );
  }
  const href = session ? "/profile" : "/login";

  return (
    <>
      <Button size="lg" className="opacity-60">
        <Link href={href}>Get Started</Link>
      </Button>
      {session && <p>Welcome back, {session.user.name} 🎉</p>}
    </>
  );
};
