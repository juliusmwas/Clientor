import AboutCta from "../components/website/about/AboutCta";
import AboutHero from "../components/website/about/AboutHero";
import ClientorApproach from "../components/website/about/ClientorApproach";
import WhatWeBelieve from "../components/website/about/WhatWeBelieve";
import WhyClientor from "../components/website/about/WhyClientor";

function About() {
  return (
    <>
      <AboutHero />
      <WhyClientor />
      <WhatWeBelieve />
      <ClientorApproach />
      <AboutCta />
    </>
  );
}

export default About;
