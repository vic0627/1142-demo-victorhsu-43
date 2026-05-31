import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid_43 from '../products/ProductsGrid_43';
import { fetchFeaturedProducts } from '../../_utils/action';

const FeaturedProducts_43 = async () => {
  const products = await fetchFeaturedProducts();
  console.log('Featured Products:', products);
  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid_43 products={products} />
    </section>
  );
}
export default FeaturedProducts_43;
