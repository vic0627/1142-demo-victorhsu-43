import { formatCurrency } from '../../_utils/format';
import { Product } from '../../_utils/action';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import FavoriteToggleButton_43 from './FavoriteToggleButton_43';

const ProductsGrid_43 = ({ products }: { products: Product[] }) => {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        //console.log(product);
        const { name, price, image } = product;
        const productId = product.id;
        const dollarsAmount = formatCurrency(price);
            return (
          <article key={productId} className='group relative'>
            <Link href={`/store_43/products_43/${productId}`}>
              <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                <CardContent className='p-4'>
                  <div className='relative h-64 md:h-48 rounded overflow-hidden '>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw '
                      priority
                      className='rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                    />
                  </div>
                  <div className='mt-4 text-center'>
                    <h2 className='text-lg capitalize'>{name}</h2>
                    <p className='text-muted-foreground mt-2'>
                      {dollarsAmount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className='absolute top-10 right-6 z-5'>
              <FavoriteToggleButton_43 productId={productId}/>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ProductsGrid_43;
