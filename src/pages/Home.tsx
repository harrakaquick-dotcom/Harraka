import CategoriesSection from "../components/Home/CategoriesSection";
import CompanySection from "../components/Home/CompanySection";
import CoverageSection from "../components/Home/CoverageSection";
import DownloadBand from "../components/Home/DownloadBand";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import InvestorSection from "../components/Home/InvestorSection";
import Marquee from "../components/Home/Marquee";
import PressStrip from "../components/Home/PressStrip";
import Testimonials from "../components/Home/Testimonials";
import { useDeliveryClock } from "../components/Home/useDeliveryClock";

const Home = () => {
  const delivery = useDeliveryClock();

  return (
    <div className="max-w-full overflow-x-hidden font-display">
      <Hero {...delivery} />
      <Marquee />
      <PressStrip />
      <CategoriesSection />
      <HowItWorks clock={delivery.clock} />
      <CoverageSection />
      <InvestorSection />
      <Testimonials />
      <CompanySection />
      <DownloadBand />
    </div>
  );
};

export default Home;
