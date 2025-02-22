"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { adminLinks } from "@/utils/mocks/NavigationHandler";
import { Button } from "@/components/ui/button";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((link) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? "default" : "ghost";

        return (
          <Button
            asChild
            className="w-full mb-2 capitalize font-normal justify-start"
            variant={variant}
            key={link.id}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
