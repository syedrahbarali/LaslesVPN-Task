import RelevantData from "../components/RelevantData";
import Features from "./Features";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Help from "./Help";
import Network from "./Network";
import Pricing from "./Pricing";
import NewTestimonals from "./Testimonials";

const HomePage = () => {
  return (
    <main>
      <GetStarted />
      <RelevantData />
      <Features />
      <Pricing />
      <Network />
      <NewTestimonals />
      <Help />
      <Footer />
    </main>
  );
};

export default HomePage;
