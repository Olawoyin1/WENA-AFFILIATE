import CategorySection from "../components/CategoryCard";
import FeaturedProducts from "../components/FeaturedProject";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";


const Home = () => {
  return (
    <main>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <HowItWorks />
    </main>
  );
};

export default Home;
