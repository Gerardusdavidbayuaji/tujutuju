import { Suspense } from "react";

import LinksDropdown from "@/components/navbar/LinksDropdown";
import Container from "@/components/global/Container";
import CartButton from "@/components/navbar/CartButton";
import NavSearch from "@/components/navbar/NavSearch";
import DarkMode from "@/components/navbar/DarkMode";
import Logo from "@/components/navbar/Logo";

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
