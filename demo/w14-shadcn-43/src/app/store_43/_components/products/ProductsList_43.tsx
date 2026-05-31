import { formatCurrency } from '../../_utils/format';
import { Product } from '../../_utils/action';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import FavoriteToggleButton_43 from './FavoriteToggleButton_43';

const ProductsList_43 = ({ products }: { products: Product[] }) => {
  return (
    <div className='pt-12 space-y-4'>
      {products.map((product) => {
        const { name, price, image, company } = product;
        const productId = product.id;
        const dollarsAmount = formatCurrency(price);
        return (
          <article key={productId} className='group relative'>
            <Link href={`/store_43/products_43/${productId}`}>
              <Card className='transform group-hover:shadow-lg transition-shadow duration-500'>
                <CardContent className='p-6'>
                  <div className='flex gap-6 items-center'>
                    <div className='relative h-40 w-40 flex-shrink-0 rounded overflow-hidden'>
                      <Image
                        src={image}
                        alt={name}
                        fill
                        sizes='160px'
                        priority
                        className='rounded w-full object-cover'
                      />
                    </div>
                    <div className='flex-1 flex justify-between items-center'>
                      <div>
                        <h2 className='text-xl capitalize font-medium'>{name}</h2>
                        {company && (
                          <p className='text-muted-foreground text-sm mt-1'>
                            {company}
                          </p>
                        )}
                      </div>
                      <div className='text-right'>
                        <p className='text-xl font-semibold'>
                          {dollarsAmount}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className='absolute top-8 right-8 z-5'>
              <FavoriteToggleButton_43 productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ProductsList_43;
