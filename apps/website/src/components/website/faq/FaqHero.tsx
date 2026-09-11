import { Search } from "lucide-react";
import { useState, type FormEvent } from "react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

type FaqHeroProps = {
  onSearch: (query: string) => void;
};

function FaqHero({ onSearch }: FaqHeroProps) {
  const [query, setQuery] = useState("");

  const updateSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Section spacing="xl">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            Frequently Asked Questions
          </span>

          <Typography variant="display" className="mt-6">
            Answers to common questions.
          </Typography>

          <Typography
            variant="body-lg"
            className="mx-auto mt-5 max-w-2xl text-text-secondary"
          >
            Find quick answers about Clientor, invoices, payments, clients,
            teams, and everyday business management.
          </Typography>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-2xl">
            <label htmlFor="faq-search" className="sr-only">
              Search frequently asked questions
            </label>

            <div className="relative">
              <Search
                size={20}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
              />

              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(event) => updateSearch(event.target.value)}
                placeholder="Search frequently asked questions..."
                autoComplete="off"
                className="min-h-14 w-full rounded-lg border border-border bg-surface-raised pl-12 pr-4 text-sm text-text-primary shadow-sm outline-none transition-colors placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}

export default FaqHero;
