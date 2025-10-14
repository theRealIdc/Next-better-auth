"use client";

import { Button } from "./ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function SignOutButton() {
  const router = useRouter();
  async function handleClickSignOut() {
    await signOut({
      fetchOptions: {
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
          router.push("/login");
        },
      },
    });
  }
  return (
    <Button
      onClick={handleClickSignOut}
      className="text-white bg-red-500 hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 focus:ring-offset-2 focus:outline-none focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    >
      Sign out
    </Button>
  );
}
