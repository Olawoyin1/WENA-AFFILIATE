
import { useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';
// import Layout from '@/components/layout/Layout';
// import { Button } from '@/components/ui/button';
// import { BookmarkIcon, ShoppingBagIcon } from 'lucide-react';
import products, { Product } from '../Products';
import { ShoppingBagIcon } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
//   const { user, bookmarkProduct, removeBookmark } = useAuth();
  const [product, setProduct] = useState<Product | null>(null);
//   const [isBookmarked, setIsBookmarked] = useState(false);
  
  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        
        
      }
    }
    
  }, [id]);
  
//   const handleBookmark = () => {
//     if (!user) {
//       window.location.href = '/login';
//       return;
//     }
    
//     if (isBookmarked) {
//       removeBookmark(id!);
//     } else {
//       bookmarkProduct(id!);
//     }
    
//     setIsBookmarked(!isBookmarked);
//   };
  
  if (!product) {
    return (
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900">Product not found</h1>
            <p className="mt-2 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
            <button className="mt-6">
              <Link to="/">Back to Home</Link>
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link to={`/categories/${product.category}`} className="ml-2 text-gray-500 hover:text-gray-700">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-700">{product.title}</span>
            </li>
          </ol>
        </nav>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product image */}
          <div className="lg:max-w-lg lg:self-start">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Product details */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold text-gray-800">{product.title}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <h1 className="text-4xl  text-gray-900">₦{product.price.toFixed(2)}</h1>
            </div>
            
            <div className="mt-3">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-500">{product.rating} out of 5 stars</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-3">
                <p>{product.description}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center">
                <div className="rounded-full h-3 w-3 bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-700">In stock, ready to ship</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col space-y-3">
              <button className='color rounded'>
                <a 
                  href={product.affiliate_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ShoppingBagIcon className="mr-2 h-5 w-5" />
                  Buy on Amazon
                </a>
              </button>
              
              {/* {user && (
                <button  onClick={handleBookmark}>
                  <BookmarkIcon 
                    className={`mr-2 h-5 w-5 ${isBookmarked ? 'fill-wena-purple text-wena-purple' : ''}`} 
                  />
                  {isBookmarked ? 'Bookmarked' : 'Add to Bookmarks'}
                </button>
              )} */}
            </div>
            
            <div className="mt-6 border-t border-gray-200 pt-6">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              <p>
                * This is an affiliate link. We earn a commission for qualifying purchases at no extra cost to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
