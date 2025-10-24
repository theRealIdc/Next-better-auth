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
  const href = session ? "/profile" : "/auth/login";

  return (
    <>
      <Button size="lg" className="opacity-60">
        <Link href={href}>Get Started</Link>
      </Button>
      {session && (
        <p className="flex items-center gap-2">
          <span
            data-role={session.user.role}
            className="size-4 rounded-full animate-pulse data-[role=USER]:bg-blue-400 data-[role=ADMIN]:bg-red-400"
          ></span>
          Welcome back, {session.user.name} 🎉
        </p>
      )}
    </>
  );
};
