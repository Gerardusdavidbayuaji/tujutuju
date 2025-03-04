import { fetchFeaturedProducts } from "@/utils/actions/actions";

import ProductsGrid from "@/components/products/ProductsGrid";
import SectionTitle from "@/components/global/SectionTitle";

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return null;

  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={products} />
    </section>
  );
}

export default FeaturedProducts;
