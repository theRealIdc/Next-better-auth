"use client";

import { Button } from "./ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function SignOutButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  async function handleClickSignOut() {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          setIsLoading(true);
        },
        onResponse: () => {
          setIsLoading(false);
        },
        onError: (ctx: any) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("Decconected successfully", {
            style: {
              background: "##22c55e",
              color: "#fff",
            },
          });
          router.push("/auth/login");
        },
      },
    });
  }
  return (
    <Button
      onClick={handleClickSignOut}
      className="text-white bg-red-500 hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 focus:ring-offset-2 focus:outline-none focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      disabled={isLoading}
    >
      Sign out
    </Button>
  );
}
