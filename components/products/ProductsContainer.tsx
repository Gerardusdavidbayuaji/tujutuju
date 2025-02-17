import Link from "next/link";

import { fetchAllProducts } from "@/utils/actions/products";

import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

interface searchParamsProps {
  layout: string;
  search: string;
}

async function ProductsContainer({ layout, search }: searchParamsProps) {
  const products = await fetchAllProducts({ search });
  const totalProduct = products.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <section>
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-lg">
          {totalProduct} product {totalProduct > 1 && "s"}
        </h4>
        <div className="flex gap-x-4">
          <Button
            variant={layout === "grid" ? "default" : "ghost"}
            size="icon"
            asChild
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <LuLayoutGrid />
            </Link>
          </Button>
          <Button
            variant={layout === "list" ? "default" : "ghost"}
            size="icon"
            asChild
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <LuList />
            </Link>
          </Button>
        </div>
      </div>
      <Separator className="mt-4" />
      <div>
        {totalProduct === 0 ? (
          <h5>Upss, sorry no products matched your search...</h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </section>
  );
}

export default ProductsContainer;
