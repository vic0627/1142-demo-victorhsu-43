import Wrapper from '../_assets/wrappers/Shop_43';
import DeleteProduct_43 from './DeleteProduct_43';

const Product_43 = ({ img_url, pname, price, pid }) => {
  return (
    <Wrapper>
      <div className='collection-item'>
        <img className='image' src={img_url} />
        <div className='collection-footer'>
          <span className='name'>{pname}</span>
          <span className='price'>{price}</span>
        </div>
        <div className='flex justify-between items-center gap-4 custom-button'>
          <button>Add to Cart</button>
          <DeleteProduct_43 pid={pid} />
        </div>
      </div>
    </Wrapper>
  );
};
export default Product_43;
