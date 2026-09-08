import CoreFeatures from "../components/website/features/CoreFeatures";
import FeatureDetail from "../components/website/features/FeatureDetail";
import FeaturesCta from "../components/website/features/FeaturesCta";
import FeaturesHero from "../components/website/features/FeaturesHero";

function Features() {
  return (
    <>
      <FeaturesHero />
      <CoreFeatures />
      <FeatureDetail />
      <FeaturesCta />
    </>
  );
}

export default Features;
