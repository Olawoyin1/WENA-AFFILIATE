import Card from "../components/Card";

const products = [
  {
    image: "https://img.freepik.com/free-photo/sneakers-shoes_1203-8791.jpg?w=740&t=st=1714471384~exp=1714471984~hmac=b6b9d14f7d0c9eaa5f9b0030dfad0bdb",
    title: "Stylish Sneakers",
    description: "Comfortable and trendy nd iconic landmarks. sneakers for everyday wear.",
  },
  {
    image: "https://img.freepik.com/free-photo/watch_1203-4708.jpg?w=740&t=st=1714471423~exp=1714472023~hmac=49a2ae0bb0a768bbec3885b4896b0ff7",
    title: "Luxury Watch",
    description: "Elegant wristwatches to nd iconic landmarks.enhance your fashion.",
  },
  {
    image: "https://img.freepik.com/free-photo/laptop_53876-97132.jpg?w=740&t=st=1714471461~exp=1714472061~hmac=30b504117d4c30e3766a9b47c30c38c5",
    title: "High-Performance Laptop",
    description: "Boost your productivity with this fast and reliable laptop.",
  },
  {
    image: "https://img.freepik.com/free-photo/sneakers-shoes_1203-8791.jpg?w=740&t=st=1714471384~exp=1714471984~hmac=b6b9d14f7d0c9eaa5f9b0030dfad0bdb",
    title: "Stylish Sneakers",
    description: "Comfortable and trendy nd iconic landmarks.  sneakers for everyday wear.",
  },
  {
    image: "https://img.freepik.com/free-photo/watch_1203-4708.jpg?w=740&t=st=1714471423~exp=1714472023~hmac=49a2ae0bb0a768bbec3885b4896b0ff7",
    title: "Luxury Watch",
    description: "Elegant wristwatches to enhance your fashion.nd iconic landmarks.",
  },
  {
    image: "https://img.freepik.com/free-photo/laptop_53876-97132.jpg?w=740&t=st=1714471461~exp=1714472061~hmac=30b504117d4c30e3766a9b47c30c38c5",
    title: "High-Performance Laptop",
    description: "Boost your productivity with this fast and reliable laptop.",
  },
];

const ProductList = () => {
  return (
    <div className="container">
      <div className="text-4xl font-bold py-7 cf text-center">
        <h2>Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 gap-5">
        {products.map((item, index) => (
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

export default ProductList;
