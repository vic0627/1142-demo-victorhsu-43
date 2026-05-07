'use client';

import { useEffect, useState } from 'react';
import Product_43 from '../../_components/Product_43';
import Wrapper from '../../_assets/wrappers/Shop_43';

import { useParams } from 'next/navigation';

const FetchProductsByCategory_43 = () => {
  const [shop_43, setShop_43] = useState([]);
  const params = useParams();
  const cat = params.category;

  const fetchProductsFromNode = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/shop_43/${cat}`);
      const data = await response.json();
      console.log('shop_43 data', data);
      if (data.length !== 0) {
        setShop_43(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsFromNode();
  }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> victor hsu, 213410300 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title capitalize'>{cat}</h1>
          <div className='items'>
            {shop_43?.map((item) => {
              const { id, img_url, name, price } = item;
              return (
                <Product_43
                  key={id}
                  img_url={img_url}
                  name={name}
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
