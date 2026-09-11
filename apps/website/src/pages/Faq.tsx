import { useMemo, useState } from "react";
import FaqCategories from "../components/website/faq/FaqCategories";
import FaqCta from "../components/website/faq/FaqCta";
import FaqHero from "../components/website/faq/FaqHero";
import FaqList from "../components/website/faq/FaqList";
import { faqCategories, faqItems, type FaqCategory } from "../data/faq";

function Faq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory | "All">(
    "All",
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return faqItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      if (!normalizedQuery) {
        return matchesCategory;
      }

      const matchesSearch =
        item.question.toLowerCase().includes(normalizedQuery) ||
        item.answer.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <FaqHero onSearch={setSearchQuery} />

      <section className="pb-10">
        <FaqCategories
          categories={faqCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </section>

      <FaqList items={filteredItems} />

      <FaqCta />
    </>
  );
}

export default Faq;
