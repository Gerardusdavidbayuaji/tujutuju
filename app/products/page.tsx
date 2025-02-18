import ProductsContainer from "@/components/products/ProductsContainer";

interface searchParams {
  layout?: string;
  search?: string;
}

interface searchParamsProps {
  searchParams: Promise<searchParams>;
}

async function ProductsPage({ searchParams }: searchParamsProps) {
  const resolvedParams = await searchParams;
  const layout = resolvedParams.layout || "grid";
  const search = resolvedParams.search || "";

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}

export default ProductsPage;
