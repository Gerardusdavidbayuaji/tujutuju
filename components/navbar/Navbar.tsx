import { Suspense } from "react";

import Container from "../global/Container";
import LinksDropdown from "./LinksDropdown";
import CartButton from "./CartButton";
import NavSearch from "./NavSearch";
import DarkMode from "./DarkMode";
import Logo from "./Logo";

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
