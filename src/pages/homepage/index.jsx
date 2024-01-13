import HeroSection from "@layouts/herosection";
import Public from "@layouts/public";
import CategoryList from "@modules/categorylist";

const Home = () => {
  return (
    <Public>
      <HeroSection />
      <CategoryList />
    </Public>
  );
};
export default Home;
