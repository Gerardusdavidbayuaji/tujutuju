"use client";

import Link from "next/link";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";

function SignOutLink() {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      description: "Logged out successfully",
    });
  };

  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
}

export default SignOutLink;
