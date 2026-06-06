import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid_43 from '../products/ProductsGrid_43';
import { fetchFeaturedProducts } from '../../_utils/action';

const fixImagePath = (image: string) => {
  if (!image) return '/images/store/product-1.jpg';
  if (image.includes('products-')) {
    return image.replace('products-', 'product-');
  }
  return image;
};

const FeaturedProducts_43 = async () => {
  const products = await fetchFeaturedProducts();
  const fixedProducts = products.map(p => ({
    ...p,
    image: fixImagePath(p.image)
  }));
  console.log('Featured Products:', fixedProducts);
  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid_43 products={fixedProducts} />
    </section>
  );
}
export default FeaturedProducts_43;
