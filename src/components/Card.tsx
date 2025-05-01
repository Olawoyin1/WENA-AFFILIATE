import { IoIosArrowRoundForward } from "react-icons/io";


// components/Card.tsx
type CardProps = {
    image: string;
    title: string;
    description: string;
  };
  
  const Card = ({ image, title, description }: CardProps) => {
    return (
      <div className="bg-white border border-gray-200 overflow-hidden transition">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="mt-1 p-3">
          <h3 className="text-md font-semibold uppercase mb-1">{title}</h3>
          <p className="text-gray-600 text-sm my-2">{description}</p>
          <button className="flex items-center hover:gap-3 transition-all  gap-1 bg-gray-900 hover:bg-gray-600  text-white  px-4 p-2">Shop Now <IoIosArrowRoundForward size={17}/></button>
        </div>
      </div>
    );
  };
  
  export default Card;
  