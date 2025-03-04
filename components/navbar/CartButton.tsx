import Link from "next/link";

import { getCartItems } from "@/utils/actions/actions";

import { Button } from "@/components/ui/button";
import { LuShoppingCart } from "react-icons/lu";

async function CartButton() {
  const numItemsInCart = await getCartItems();

  return (
    <Button
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
      asChild
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
