import RelevantData from "../components/RelevantData";
import Features from "./Features";
import GetStarted from "./GetStarted";
import Network from "./Network";
import NewTestimonals from "./NewTestimonals";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <main>
      <GetStarted />
      <RelevantData />
      <Features />
      <Pricing />
      <Network />
      {/* <Testimonials /> */}
      <NewTestimonals />
    </main>
  );
};

export default HomePage;
