import ProductsContainer_43 from '../_components/products/ProductsContainer_43';


const ProductsPage_43 = async ({
    searchParams,
}:{
searchParams:Promise<{layout?: string; search?: string}>;
}) => {
    const {layout = 'grid', search = ''} = await searchParams;
  return (
    <ProductsContainer_43 layout={layout} search={search} />
  );
};

export default ProductsPage_43
