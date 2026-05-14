import Product_43 from '../_components/Product_43';
import Wrapper from '../_assets/wrappers/Shop_43';

import { prisma } from '@/lib/prisma';

type Product = {
  pid: number;
  pname: string | null;
  cat_id: number | null;
  price: number | null;
  img_url: string | null;
  remote_img_url: string | null;
};

const FetchProductsByCategory_43 = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  // console.log('category param:', category);

  const categoryRecord = await prisma.category_43.findFirst({
    where: { cname: category },
  });

  if (!categoryRecord) {
    return <div>Category not found</div>;
  }

  const shop_43 = await prisma.shop_43.findMany({
    where: { cat_id: categoryRecord.cid },
  });

  // console.log('Products by category :', shop_43);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> victor hsu, 213410300 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_43?.map((item: Product) => {
              const { pid, img_url, pname, price } = item;
              return (
                <Product_43
                  key={pid}
                  pid={pid}
                  img_url={img_url}
                  pname={pname}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchProductsByCategory_43;
