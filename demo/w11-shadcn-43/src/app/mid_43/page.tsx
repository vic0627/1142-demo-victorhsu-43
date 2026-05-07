import Wrapper from './_assets/wrappers/Shop_43';
import Link from 'next/link';

import { prisma } from '@/lib/prisma';

type Category_43 = {
  cid: number;
  cname: string | null;
  size: string | null;
  image_url: string | null;
  remote_image_url: string | null;
  link_url: string | null;
};

const fetchCategory_43 = async (): Promise<Category_43[]> => {
  const categories = await prisma.category_43.findMany();
  return categories;
};

const StaticPage_43 = async () => {
  const categories_43: Category_43[] = await fetchCategory_43();

  return (
    <Wrapper>
      <div className='max-w-4xl mx-auto shop-page'>
        <div className='section-title'>
          <h4> victor hsu, 213410300 </h4>
        </div>

        <div className='homepage'>
          <div className='directory-menu'>
            {categories_43.map((item: Category_43) => {
              const { cid, cname, size, image_url } = item;

              return (
                <div className={`${size ?? ''} menu-item`} key={cid}>
                  <img
                    className='background-image'
                    src={image_url || '/default.jpg'}
                    alt={cname ?? 'category'}
                  />

                  <Link href={`/mid_43/${cname ?? ''}`} className='content'>
                    <h1 className='title'>{cname}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StaticPage_43;