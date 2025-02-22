import Link from "next/link";

import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { navigations } from "@/utils/mocks/NavigationHandler";

import { LuAlignLeft } from "react-icons/lu";
import SignOutLink from "./SignOutLink";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import {
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

import { auth } from "@clerk/nextjs/server";

async function LinksDropdown() {
  const { userId } = await auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {navigations.map((navigation) => {
            if (navigation.label === "dashboard" && !isAdmin) return null;
            return (
              <DropdownMenuItem key={navigation.href}>
                <Link href={navigation.href} className="capitalize w-full">
                  {navigation.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
