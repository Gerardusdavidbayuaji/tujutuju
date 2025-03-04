"use client";

import { usePathname } from "next/navigation";

import { toggleFavoriteAction } from "@/utils/actions/actions";

import { CardSubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";

interface FavoriteToggleFormProps {
  productId: string;
  favoriteId: string | null;
}

function FavoriteToggleForm({
  productId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    productId,
    favoriteId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
export default FavoriteToggleForm;
