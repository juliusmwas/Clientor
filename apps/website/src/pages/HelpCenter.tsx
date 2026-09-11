import { useState } from "react";
import HelpCategories from "../components/website/help/HelpCategories";
import HelpCenterHero from "../components/website/help/HelpCenterHero";
import HelpCta from "../components/website/help/HelpCta";
import PopularArticles from "../components/website/help/PopularArticles";

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <HelpCenterHero onSearch={setSearchQuery} />

      <HelpCategories />

      <PopularArticles searchQuery={searchQuery} />

      <HelpCta />
    </>
  );
}

export default HelpCenter;
