
import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
import { ShoppingBagIcon, ShirtIcon, UtensilsIcon, PlaneIcon, HeartHandshakeIcon } from 'lucide-react';

const categories = [
  {
    name: 'Clothing',
    description: 'Fashion items from top brands',
    icon: ShirtIcon,
    bgColor: 'bg-wena-pink bg-opacity-20',
    textColor: 'text-wena-dark-purple',
    path: '/categories/clothing',
  },
  {
    name: 'Products',
    description: 'Electronics, gadgets, and more',
    icon: ShoppingBagIcon,
    bgColor: 'bg-wena-purple bg-opacity-20',
    textColor: 'text-wena-dark-purple',
    path: '/categories/products',
  },
  {
    name: 'Food',
    description: 'Gourmet and specialty foods',
    icon: UtensilsIcon,
    bgColor: 'bg-wena-orange bg-opacity-20',
    textColor: 'text-wena-dark-purple',
    path: '/categories/food',
  },
  {
    name: 'Travel',
    description: 'Travel essentials and accessories',
    icon: PlaneIcon,
    bgColor: 'bg-wena-blue bg-opacity-20',
    textColor: 'text-wena-dark-purple',
    path: '/categories/travel',
  },
  {
    name: 'Services',
    description: 'Subscriptions and digital services',
    icon: HeartHandshakeIcon,
    bgColor: 'bg-gray-200',
    textColor: 'text-wena-dark-purple',
    path: '/categories/services',
  },
];

const CategorySection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold cf text-gray-900">Shop by Category</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our wide range of affiliate products across popular categories
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col justify-between overflow-hidden  transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className={`p-3 rounded-full mb-4 ${category.bgColor}`}>
                  <category.icon className={`h-6 w-6 ${category.textColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-wena-purple transition-colors">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {category.description}
                </p>
                <div className="mt-4">
                  <button  className="group-hover:bg-[#9B87F5] border border-gray-300 group-hover:text-white  transition-all">
                    Explore
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
