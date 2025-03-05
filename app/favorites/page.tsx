import { getUserFavorites } from "@/utils/actions/actions";

import ProductsGrid from "@/components/products/ProductsGrid";
import SectionTitle from "@/components/global/SectionTitle";

async function FavoritesPage() {
  const favorites = await getUserFavorites();
  if (favorites.length === 0)
    return <SectionTitle text="You have no favorites yet." />;

  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
}

export default FavoritesPage;
