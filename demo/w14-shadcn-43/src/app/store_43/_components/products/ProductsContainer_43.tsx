import ProductsGrid_43 from './ProductsGrid_43';
import ProductsList_43 from './ProductsList_43';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { fetchAllProducts } from '../../_utils/action';

async function ProductsContainer_43({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? ` &search=${search}"` : '';
  return (
    <>
      {/* HEADER */}
      <section>
        <div className='flex justify-between items-center'>
          <h4 className='font-medium text-lg'>{totalProducts} product{totalProducts > 1 && 's'}</h4>
          <div className='flex gap-x-4'>
            <Button
              variant={layout === 'grid' ? 'default' : 'ghost'}
              size='icon'
              asChild
            >
              <Link href={`/store_43/products_43?layout=grid&search=${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === 'list' ? 'default' : 'ghost'}
              size='icon'
              asChild
            >
              <Link href={`/store_43/products_43?layout=list&search=${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className='mt-4' />
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
        <h5>Sorry, no products matched your search...</h5>
        ) :(
          layout === 'grid' ? (
          <ProductsGrid_43 products={products} />
          ) : (
          <ProductsList_43 products={products} />
          )
        )}
      </div>
    </>
  );
}
export default ProductsContainer_43;
