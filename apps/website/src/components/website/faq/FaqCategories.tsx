import type { FaqCategory } from "../../../data/faq";

type FaqCategoriesProps = {
  categories: FaqCategory[];
  selectedCategory: FaqCategory | "All";
  onCategoryChange: (category: FaqCategory | "All") => void;
};

function FaqCategories({
  categories,
  selectedCategory,
  onCategoryChange,
}: FaqCategoriesProps) {
  return (
    <div
      className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      aria-label="FAQ categories"
    >
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => onCategoryChange("All")}
          aria-pressed={selectedCategory === "All"}
          className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
            selectedCategory === "All"
              ? "border-primary bg-primary text-white"
              : "border-border bg-surface-raised text-text-secondary hover:bg-surface hover:text-text-primary"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={selectedCategory === category}
            className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              selectedCategory === category
                ? "border-primary bg-primary text-white"
                : "border-border bg-surface-raised text-text-secondary hover:bg-surface hover:text-text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FaqCategories;
