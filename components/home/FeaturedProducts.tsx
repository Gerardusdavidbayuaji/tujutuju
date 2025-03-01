import { fetchFeaturedProducts } from "@/utils/actions/actions";

import ProductsGrid from "../products/ProductsGrid";
import SectionTitle from "../global/SectionTitle";

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return null;

  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
}

export default FeaturedProducts;
