
import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';

const steps = [
  {
    id: 1,
    title: 'Browse Products',
    description: 'Explore our wide selection of affiliate products across multiple categories.',
  },
  {
    id: 2,
    title: 'Find What You Love',
    description: 'Discover detailed information, reviews, and specifications for each product.',
  },
  {
    id: 3,
    title: 'Click and Shop',
    description: 'Click through to the retailer\'s website to complete your purchase securely.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto ">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold cf text-gray-900">How It Works</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            Shopping through WENA AFFILIATE is simple, secure, and convenient.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#9B87F5] text-white text-xl font-bold">
                    {step.id}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-center text-gray-600">{step.description}</p>
                </div>
                {step.id !== steps.length && (
                  <div className="hidden md:block absolute top-8 left-full transform -translate-x-1/2 translate-y-0">
                    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.7071 6.70711C40.0976 6.31658 40.0976 5.68342 39.7071 5.29289L33.3431 -1.07111C32.9526 -1.46163 32.3195 -1.46163 31.9289 -1.07111C31.5384 -0.680582 31.5384 -0.0474349 31.9289 0.342893L37.5858 6L31.9289 11.6571C31.5384 12.0476 31.5384 12.6808 31.9289 13.0713C32.3195 13.4619 32.9526 13.4619 33.3431 13.0713L39.7071 6.70711ZM-1.74846e-07 7L39 7L39 5L1.74846e-07 5L-1.74846e-07 7Z" fill="#9b87f5"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button  className="px-8 color">
            <Link to="/categories/products">Start Shopping Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
