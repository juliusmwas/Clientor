import BuiltForBusiness from "../components/website/home/BuiltForBusiness";
import FeatureHighlights from "../components/website/home/FeatureHighlights";
import FinalCta from "../components/website/home/FinalCta";
import Hero from "../components/website/home/Hero";
import HowItWorks from "../components/website/home/HowItWorks";
import ValueProposition from "../components/website/home/ValueProposition";

function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <FeatureHighlights />
      <BuiltForBusiness />
      <FinalCta />
    </>
  );
}

export default Home;
