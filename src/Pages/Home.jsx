import Banner from "../Layout/Banner";
import Category from "../Layout/Category";
import Testimonial from "../Layout/Testimonial";
import WhoWeAre from "../Layout/WhoWeAre";
// import CategorySection from "../Layout/CategorySection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <CategorySection /> */}
      <Category></Category>
      <WhoWeAre></WhoWeAre>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
