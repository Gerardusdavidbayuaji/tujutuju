import ProductsContainer from "@/components/products/ProductsContainer";

interface searchParams {
  layout?: string;
  search?: string;
}

interface searchParamsProps {
  searchParams: searchParams;
}

function ProductsPage({ searchParams }: searchParamsProps) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}

export default ProductsPage;
