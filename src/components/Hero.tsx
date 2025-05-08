
// import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    // <div className="relative bg-[#f1f1f1] overflow-hidden">
    //   <div className="container mx-auto">
    //     <div className="relative bg-[#f1f1f1] z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
    //       <svg
    //         className="hidden  absolute right-0 inset-y-0 h-full w-49 text-white transform translate-x-1/2"
    //         fill="currentColor"
    //         viewBox="0 0 100 100"
    //         preserveAspectRatio="none"
    //         aria-hidden="true"
    //       >
    //         <polygon points="50,0 100,0 50,100 0,100" />
    //       </svg>

    //       <div className="pt-10 mx-auto max-w-7xl bg-[#f1f1f1]  sm:pt-12  md:pt-16 lg:pt-20  xl:pt-28">
    //         <div className="sm:text-center lg:text-left">
    //           <h1 className="text-3xl font-extrabold cf tracking-tight  text-gray-900 sm:text-5xl md:text-6xl">
    //             <span className="block xl:inline">Discover the Best</span>{' '}
    //             <span className="block text-[#9B87F5] xl:inline">Affiliate Products</span>
    //           </h1>
    //           <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
    //             Explore curated selections of top-quality products across multiple categories. Find exactly what you need from trusted brands.
    //           </p>
    //           <div className="mt-6 flex flex-col sm:flex-row sm:justify-start">
    //           <Link
    //             to="/categories/products"
    //             className="mb-3 sm:mb-0 sm:mr-4 inline-block px-6 py-3 text-base font-medium rounded-md text-white bg-[#9B87F5] hover:bg-purple-700"
    //           >
    //             Browse Products
    //           </Link>
    //           <Link
    //             to="/categories/clothing"
    //             className="inline-block px-6 py-3 text-base font-medium rounded-md text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
    //           >
    //             Explore Fashion
    //           </Link>
    //         </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    //     <img
    //       className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
    //       src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&auto=format&fit=crop&q=80"
    //       alt="Person browsing products on a smartphone"
    //     />
    //   </div>
    // </div>
    <div className="relative  bg-white overflow-hidden">
        
      <div className="container  ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 s md:pt-16 lg:pt-20  xl:pt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl text-center lg:text-start cf tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Discover the Best</span>{' '}
                <span className="block text-[#9B87F5] xl:inline">Affiliate Products</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Explore curated selections of top-quality products across multiple categories. Find exactly what you need from trusted brands.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button  className="w-full h-full overflow-hidden color" >
                    <Link to="/categories/products">
                      Browse Products
                    </Link>
                  </button>
                </div>
                <div className="mt-3 border border-gray-300 rounded sm:mt-0 sm:ml-3">
                  <button  className="w-full" >
                    <Link to="/categories/clothing">
                      Explore Fashion
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&auto=format&fit=crop&q=80"
          alt="Person browsing products on a smartphone"
        />
      </div>
    </div>
  );
};

export default Hero;
