  import EmptyList from '../../_components/global/EmptyList';
import Link from 'next/link';
import { formatCurrency } from '../../_utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IconButton } from '../../_components/form/Buttons';
import FormContainer from '../../_components/form/FormContainer';
import { fetchAdminProducts, deleteProductAction } from '../../_utils/action';
import {Separator} from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

async function AdminProductsPage_43() {
  const items = await fetchAdminProducts();
  if (items.length === 0) {
    return <EmptyList />;
  }
  return (
    <section>
          <div className="space-y-2">
      <div className="flex items-center justify-between mr-16">
        <h1 className="text-2xl font-bold">Products_43</h1>
        <Button asChild variant="default">
          <Link href="/store_43/admin_43/products_43/create">Create Product</Link>
        </Button>
      </div>
    </div>
    <Separator className="my-4" />
      <Table>
        <TableCaption className='capitalize'>total products : {items.length}</TableCaption>
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
            const {id: productId, name, company, price} = item;
            return (
              <TableRow key={productId}>
                <TableCell>{name}</TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell className='flex items-center gap-x-2'>
                  <Link href={`/store_43/admin_43/products_43/${productId}/edit`}>
                    <IconButton actionType='edit' />
                  </Link>
                  <DeleteProduct productId={productId} />
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
      <IconButton actionType='delete' />
    </FormContainer>
  );
}

export default AdminProductsPage_43;
