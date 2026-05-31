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
import { fetchAdminProducts, deleteProduct } from '../../_utils/action';

async function AdminProductsPage_43() {
  const products = await fetchAdminProducts();
  if (products.length === 0) {
    return <EmptyList />;
  }
  return (
    <section>
      <Table>
        <TableCaption className='capitalize'>total products : {products.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.company}</TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell className='flex gap-2'>
                  <Link href={`/store_43/admin_43/products_43/${product.id}`}>
                    <IconButton actionType='edit' />
                  </Link>
                  <FormContainer action={deleteProduct} productId={product.id}>
                    <IconButton actionType='delete' />
                  </FormContainer>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

export default AdminProductsPage_43;
