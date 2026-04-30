import { deleteAllBlog_43 } from '@/actions/blog.action_43';

const DeleteAllBlogs_43 = () => {
  return (
    <form action={deleteAllBlog_43}>
      <button
        type='submit'
        className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded'
      >
        delete all blogs
      </button>
    </form>
  );
};

export default DeleteAllBlogs_43;
