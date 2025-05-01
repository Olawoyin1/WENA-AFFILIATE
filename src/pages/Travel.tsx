import Card from "../components/Card";

const travelDestinations = [
  {
    image: "https://img.freepik.com/free-photo/maldives-island-resort_53876-95349.jpg?w=740",
    title: "Maldives",
    description: "Escape to paradise with crystal-clear water and white sand beaches.",
  },
  {
    image: "https://img.freepik.com/free-photo/famous-eiffel-tower-paris-with-beautiful-sunrise-sky_268835-828.jpg?w=740",
    title: "Paris",
    description: "The city of love, nd iconic landmarks. history, and iconic landmarks.",
  },
  {
    image: "https://img.freepik.com/free-photo/new-york-cityscape-with-brooklyn-bridge_268835-779.jpg?w=740",
    title: "New York",
    description: "Explore the vibrant life nd iconic landmarks. of the city that never sleeps.",
  },
  {
    image: "https://img.freepik.com/free-photo/maldives-island-resort_53876-95349.jpg?w=740",
    title: "Maldives",
    description: "Escape to paradise with crystal-clear water and white sand beaches.",
  },
  {
    image: "https://img.freepik.com/free-photo/famous-eiffel-tower-paris-with-beautiful-sunrise-sky_268835-828.jpg?w=740",
    title: "Paris",
    description: "The city of love,nd iconic landmarks. history, and iconic landmarks.",
  },
  {
    image: "https://img.freepik.com/free-photo/new-york-cityscape-with-brooklyn-bridge_268835-779.jpg?w=740",
    title: "New York",
    description: "Explore the vibrant nd iconic landmarks. life of the city that never sleeps.",
  },
];

const TravelList = () => {
  return (
    <div className="container">
      <div className="text-4xl font-bold py-7 cf text-center">
        <h2>Travel</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
        {travelDestinations.map((item, index) => (
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

export default TravelList;
