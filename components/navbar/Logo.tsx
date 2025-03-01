import Link from "next/link";

import { Button } from "@/components/ui/button";
import { IoFootball } from "react-icons/io5";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <IoFootball className="w-8 h-8" />
      </Link>
    </Button>
  );
}

export default Logo;
