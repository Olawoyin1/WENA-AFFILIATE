import Card from "../components/Card";

const clothes = [
  {
    image: "https://img.freepik.com/free-photo/young-handsome-man-posing_144627-28433.jpg?w=740",
    title: "Classic Blue Denim Jacket",
    description: "Timeless denim jacket, perfect for layering all year round.",
  },
  {
    image: "https://img.freepik.com/free-photo/white-shirt-isolated_1203-7485.jpg?w=740",
    title: "Cotton White Shirt",
    description: "Lightweight breathable shirt for smart or casual looks.",
  },
  {
    image: "https://img.freepik.com/free-photo/beautiful-young-woman-elegant-dress-studio_144627-68476.jpg?w=740",
    title: "Women's Striped Dress",
    description: "Elegant striped summer dress for a relaxed, breezy style.",
  },
  {
    image: "https://img.freepik.com/free-photo/man-sitting-wooden-bench_1303-12613.jpg?w=740",
    title: "Khaki Casual Trousers",
    description: "Versatile khaki chinos ideal for nd iconic landmarks. work or weekends.",
  },
  {
    image: "https://img.freepik.com/free-photo/young-man-wearing-winter-jacket_144627-8795.jpg?w=740",
    title: "Hooded Winter Jacket",
    description: "Stay warm with our durable nd iconic landmarks.and stylish winter jacket.",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-man-wearing-jeans_171337-19077.jpg?w=740",
    title: "Slim Fit Jeans",
    description: "Modern slim fit jeans with nd iconic landmarks.stretch for everyday comfort.",
  },
];

const Clothing = () => {
  return (
    <div className="container mx-auto ">
      <div className="text-4xl font-bold text-center cf py-7">Clothing</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
        {clothes.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Clothing;
