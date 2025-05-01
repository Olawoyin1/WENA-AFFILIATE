import Card from "../components/Card";

const foodItems = [
  {
    image: "https://img.freepik.com/free-photo/top-view-burger-plate_23-2148368520.jpg?w=740",
    title: "Cheeseburger",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde asperiores eos, corporis, accusamus .",
  },
  {
    image: "https://img.freepik.com/free-photo/italian-pasta-with-tomato-sauce_1203-1762.jpg?w=740",
    title: "Italian Pasta",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde asperiores eos, corporis, accusamus .",
  },
  {
    image: "https://img.freepik.com/free-photo/top-view-delicious-pizza-with-vegetables_23-2148737221.jpg?w=740",
    title: "Veggie Pizza",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde asperiores eos, corporis, accusamus .",
  },
  {
    image: "https://img.freepik.com/free-photo/top-view-burger-plate_23-2148368520.jpg?w=740",
    title: "Cheeseburger",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde asperiores eos, corporis, accusamus .",
  },
  {
    image: "https://img.freepik.com/free-photo/italian-pasta-with-tomato-sauce_1203-1762.jpg?w=740",
    title: "Italian Pasta",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde asperiores eos, corporis, accusamus .",
  },
  {
    image: "https://img.freepik.com/free-photo/top-view-delicious-pizza-with-vegetables_23-2148737221.jpg?w=740",
    title: "Veggie Pizza",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde asperiores eos, corporis, accusamus .",
  },
];

const FoodList = () => {
  return (
    <div className="container">
      <div className="text-4xl font-bold py-7 cf text-center">
        <h2>Food</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
        {foodItems.map((item, index) => (
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

export default FoodList;
