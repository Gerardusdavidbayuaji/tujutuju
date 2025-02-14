import Link from "next/link";

import { navigations } from "@/utils/mocks/NavigationHandler";

import { LuAlignLeft } from "react-icons/lu";
import { Button } from "../ui/button";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        {navigations.map((navigation) => {
          return (
            <DropdownMenuItem key={navigation.href}>
              <Link href={navigation.href} className="capitalize w-full">
                {navigation.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
