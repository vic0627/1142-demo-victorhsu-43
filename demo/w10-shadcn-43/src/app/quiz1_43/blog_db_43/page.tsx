import Blog2_43 from '../_components/Blog2_43';
import Wrapper from '../_assets/wrapper/Blog2_43';
import Alert_43 from '../_components/Alert_43';
import DeleteAllBlogs_43 from '../_components/DeleteAllBlogs_43';
import SeedAllBlogs_43 from '../_components/SeedBlogs_43';

import { prisma } from '@/lib/prisma';

type Blog = {
  id: number;
  img: string | null;
  category: string | null;
  title: string | null;
  descrip: string | null;
};

export const fetchBlog_43 = async () => {
  const blogs = await prisma.blog_43.findMany();
  return blogs;
};

const P1_43 = async () => {
  const blogs_43: Blog[] = await fetchBlog_43();
  // console.log('blogs_43:', blogs_43);

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>blogs from local PosgreSQL -- victor hsu, 213410300</h2>
        </div>
        <div className='blogs-center2'>
          {blogs_43?.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog2_43
                key={id}
                id={id}
                title={title || 'Untitled'}
                descrip={descrip || 'No description'}
                category={category || 'Uncategorized'}
                img={img || '/default-blog.jpg'}
              />
            );
          })}
        </div>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <DeleteAllBlogs_43 />
          <SeedAllBlogs_43 />
        </div>
      </section>
    </Wrapper>
  );
};

export default P1_43;
