
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">WENA AFFILIATE</h3>
            <p className="mt-4 text-sm text-gray-600">
              Discover the best affiliate products across multiple categories. We help you find quality products from trusted brands.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Categories</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <Link to="/categories/clothing" className="text-sm text-gray-600 hover:text-wena-purple">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/categories/products" className="text-sm text-gray-600 hover:text-wena-purple">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories/food" className="text-sm text-gray-600 hover:text-wena-purple">
                  Food
                </Link>
              </li>
              <li>
                <Link to="/categories/travel" className="text-sm text-gray-600 hover:text-wena-purple">
                  Travel
                </Link>
              </li>
              <li>
                <Link to="/categories/services" className="text-sm text-gray-600 hover:text-wena-purple">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-wena-purple">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-wena-purple">
                  FAQs
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-wena-purple">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-wena-purple">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <p className="mt-4 text-xs text-gray-500">
              WENA AFFILIATE is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.
            </p>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} WENA AFFILIATE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
