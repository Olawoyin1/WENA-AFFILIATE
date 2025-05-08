
import { useMemo } from 'react';
// import ProductCard from '../products/ProductCard';
import products from '../Products';
import ProductCard from './ProductCard';
// import products from '@/data/products';

const FeaturedProducts = () => {
  const featuredProducts = useMemo(() => {
    return products.filter(product => product.featured);
  }, []);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 cf">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our hand-picked selection of top-quality affiliate products
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
