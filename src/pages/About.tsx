import AboutHero from "../components/About/AboutHero";
import ContactBand from "../components/About/ContactBand";
import LeadershipSection from "../components/About/LeadershipSection";
import RidersSection from "../components/About/RidersSection";
import StorySection from "../components/About/StorySection";
import TimelineSection from "../components/About/TimelineSection";
import ValuesSection from "../components/About/ValuesSection";

const About = () => {
  return (
    <div className="max-w-full overflow-x-hidden font-display">
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TimelineSection />
      <LeadershipSection />
      <RidersSection />
      <ContactBand />
    </div>
  );
};

export default About;
