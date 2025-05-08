
import { Link } from 'react-router-dom';
import { Product } from '../Products';
// import { useAuth } from './AuthUser';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
//   const { user, bookmarkProduct, removeBookmark } = useAuth();
//   const [isBookmarked, setIsBookmarked] = useState<boolean>(
//     user?.bookmarks?.includes(product.id) || false
//   );

//   const handleBookmark = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     if (!user) {
//       window.location.href = '/login';
//       return;
//     }
    
//     if (isBookmarked) {
//       removeBookmark(product.id);
//     } else {
//       bookmarkProduct(product.id);
//     }
    
//     setIsBookmarked(!isBookmarked);
//   };

  return (
    <div className="product-card bg-white rounded border border-gray-300 overflow-hidden h-full flex flex-col">
      <div className="relative pb-[60%] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* {user && (
          <button 
            onClick={handleBookmark}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <BookmarkIcon 
              className={`h-5 w-5 ${isBookmarked ? 'fill-wena-purple text-wena-purple' : 'text-gray-400'}`} 
            />
          </button>
        )} */}
      </div>
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`} className="block group">
            <h3 className="font-semibold text-gray-900 group-hover:text-wena-purple transition-colors">
              {product.title}
            </h3>
          </Link>
        </div>
        <div className="mt-1 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
          </div>
          <span className="ml-auto text-wena-purple font-semibold">₦{product.price.toFixed(2)}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-full">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-4 pt-0">
        <div className="w-full flex space-x-2">
          <button  className="flex-1 color">
            <a href={product.affiliate_url} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </button>
          <button  className="flex-1 border border-gray-300">
            <Link to={`/product/${product.id}`}>
              View Details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
