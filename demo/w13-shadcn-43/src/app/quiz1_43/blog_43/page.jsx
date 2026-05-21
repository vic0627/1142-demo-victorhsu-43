'use client';

import { useState } from 'react';

import blogData_43 from '../_assets/data/blogData.json';
import Blog2_43 from '../_components/Blog2_43';
import Wrapper from '../_assets/wrapper/Blog2_43';
import Alert_43 from '../_components/Alert_43';

const BlogLocalJsonPage2_43 = () => {
  const [name, setName] = useState('victor hsu');
  const [id, setId] = useState(213410300);
  const [blogs_43, setBlogs_43] = useState(blogData_43);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs_43(blogs_43.filter((blog) => blog.id !== id));
  };

  const clearAllBlogs = () => {
    showAlert(true, 'clear all blogs', 'danger');
    setBlogs_43([]);
  };

  const loadAllBlogs = () => {
    showAlert(true, 'load all blogs', 'success');
    setBlogs_43([]);
    setBlogs_43(blogData_43);
  };

  return (
    <Wrapper>
      {alert.show && <Alert_43 alert={alert} showAlert={showAlert} />}
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json -- {name}, {id}{' '}
          </h2>
        </div>
        <div className='blogs-center2'>
          {blogs_43.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog2_43
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
                removeItem={removeItem}
              />
            );
          })}
        </div>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <button
            type='button'
            className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded'
            onClick={clearAllBlogs}
          >
            clear all blogs
          </button>
          <button
            type='button'
            className='text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded'
            onClick={loadAllBlogs}
          >
            load all blogs
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogLocalJsonPage2_43;
