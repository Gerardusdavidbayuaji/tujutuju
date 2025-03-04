"use client";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";

import { addToCartAction } from "@/utils/actions/actions";

import { ProductSignInButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import SelectProductAmount from "./SelectProductAmount";
import SubmitButton from "@/components/form/Buttons";
import { Mode } from "./SelectProductAmount";

function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();

  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <SubmitButton text="add to cart" size="default" className="mt-8" />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
}
export default AddToCart;
