import { SeedBlog_43 } from '@/actions/blog.action_43';

const SeedBlogs_43 = () => {
  return (
    <form action={SeedBlog_43 }>
      <button
        type='submit'
        className='text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded'
      >
        seed blogs
      </button>
    </form>
  );
};

export default SeedBlogs_43;
