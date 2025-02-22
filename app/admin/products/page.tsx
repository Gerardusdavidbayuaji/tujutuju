import Link from "next/link";

import { formatCurrency } from "@/utils/formats/format-currency";
import {
  fetchAdminProducts,
  deleteProductAction,
} from "@/utils/actions/actions";
import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";

import EmptyList from "@/components/global/EmptyList";

import {
  TableCaption,
  TableHeader,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from "@/components/ui/table";

async function AdminProductsPage() {
  const items = await fetchAdminProducts();
  if (items.length === 0) return <EmptyList />;

  return (
    <section>
      <Table>
        <TableCaption className="capitalize">
          total products : {items.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>
                  <Link
                    href={`/products/${item.id}`}
                    className="underline text-muted-foreground tracking-wide capitalize"
                  >
                    {item.name}
                  </Link>
                </TableCell>
                <TableCell>{item.company}</TableCell>
                <TableCell>{formatCurrency(item.price)}</TableCell>
                <TableCell className="flex items-center gap-x-2">
                  <Link href={`/admin/products/${item.id}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>
                  <DeleteProduct productId={item.id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

export default AdminProductsPage;
