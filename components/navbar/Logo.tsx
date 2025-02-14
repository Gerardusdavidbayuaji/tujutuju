import Link from "next/link";

import { SiSinglestore } from "react-icons/si";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <SiSinglestore className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
