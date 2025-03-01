import Image from "next/image";
import { auth } from "@clerk/nextjs/server";

import {
  fetchSingleProduct,
  findExistingReview,
} from "@/utils/actions/actions";
import { formatCurrency } from "@/utils/formats/format-currency";

import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ProductRating from "@/components/single-product/ProductRating";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ShareButton from "@/components/single-product/ShareButton";
import ProductReviews from "@/components/review/ProductReviews";
import AddToCart from "@/components/single-product/AddToCart";
import SubmitReview from "@/components/review/SubmitReview";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function SingleProductPage({ params }: PageProps) {
  const { id } = await params;
  const { userId } = await auth();
  const product = await fetchSingleProduct(id);
  const reviewDoesNotExist =
    userId && !(await findExistingReview(userId, product.id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={(await params).id} />
            <ShareButton name={product.id} productId={(await params).id} />
          </div>
          <ProductRating productId={(await params).id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={(await params).id} />
        </div>
      </div>
      <ProductReviews productId={(await params).id} />
      {reviewDoesNotExist && <SubmitReview productId={(await params).id} />}
    </section>
  );
}

export default SingleProductPage;
