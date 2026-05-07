import Wrapper from '../_assets/wrappers/Shop_43';
import NavbarShop_43 from '../_components/NavbarShopNode_43';
import Link from 'next/link';

const ShopNodeMainPage_43 = () => {
  return (
    <Wrapper>
      <div className='midterm'>
        <div className='section-title'>
          <h4> victor hsu, 213410300 </h4>
        </div>
        <div className='homepage'>
          <div className='directory-menu'>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/hats.png'
                alt=''
              />
              <Link href='/mid_43/static/hats' className='content'>
                <h1 className='title'>HATS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/jackets.png'
                alt=''
              />
              <Link href='/mid_43/static/jackets' className='content'>
                <h1 className='title'>JACKETS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/sneakers.png'
                alt=''
              />
              <Link href='/mid_43/static/sneakers' className='content'>
                <h1 className='title'>SNEAKERS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='large menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/womens.png'
                alt=''
              />
              <Link href='/mid_43/static/womens' className='content'>
                <h1 className='title'>WOMENS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='large menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/mens.png'
                alt=''
              />
              <Link href='/mid_43/static/mens' className='content'>
                <h1 className='title'>MENS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopNodeMainPage_43;
