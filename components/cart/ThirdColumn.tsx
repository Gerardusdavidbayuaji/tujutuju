"use client";

import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

import {
  removeCartItemAction,
  updateCartItemAction,
} from "@/utils/actions/actions";

import SelectProductAmount from "@/components/single-product/SelectProductAmount";
import { Mode } from "@/components/single-product/SelectProductAmount";
import FormContainer from "@/components/form/FormContainer";
import SubmitButton from "@/components/form/Buttons";

interface ThirdColumnProps {
  quantity: number;
  id: string;
}

function ThirdColumn({ quantity, id }: ThirdColumnProps) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast({ description: "Calculating..." });

    try {
      const result = await updateCartItemAction({
        amount: value,
        cartItemId: id,
      });

      if (!result || !result.message) {
        throw new Error("Invalid response from server");
      }

      setAmount(value);
      toast({ description: result.message });
    } catch (error) {
      console.error("Error updating cart item:", error);
      toast({
        description: "Failed to update cart item",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4" text="remove" />
      </FormContainer>
    </div>
  );
}

export default ThirdColumn;
