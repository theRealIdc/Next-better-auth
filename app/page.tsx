import { GetStartedButton } from "@/components/get-started-button";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center mx-auto h-dvh">
      <div className="flex justify-center gap-8 flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Next.js + Tailwind CSS + TypeScript + Prisma + BetterAuth
        </h1>
        <GetStartedButton />
      </div>
    </div>
  );
}
