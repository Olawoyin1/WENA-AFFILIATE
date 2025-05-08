
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import products from '../Products';
// import Layout from '@/components/layout/Layout';
// import ProductGrid from '@/components/products/ProductGrid';
// import products from '@/data/products';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryTitle = useMemo(() => {
    if (!category) return 'All Products';
    return category.charAt(0).toUpperCase() + category.slice(1);
  }, [category]);
  
  const filteredProducts = useMemo(() => {
    if (!category) return products;
    return products.filter(product => product.category === category);
  }, [category]);
  
  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <main>
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl cf font-extrabold text-gray-900">{categoryTitle}</h1>
          <p className="mt-2 text-gray-600">
            Browse our selection of {categoryTitle.toLowerCase()} affiliate products
          </p>
        </div>
        
        <ProductGrid products={filteredProducts} />
      </div>
    </main>
  );
};

export default CategoryPage;
