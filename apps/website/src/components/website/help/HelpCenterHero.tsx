import { Search } from "lucide-react";
import { useState, type FormEvent } from "react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

type HelpCenterHeroProps = {
  onSearch: (query: string) => void;
};

function HelpCenterHero({ onSearch }: HelpCenterHeroProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleChange = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <Section spacing="xl">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            Help Center
          </span>

          <Typography variant="display" className="mt-6">
            How can we help?
          </Typography>

          <Typography
            variant="body-lg"
            className="mx-auto mt-5 max-w-2xl text-text-secondary"
          >
            Find answers, learn how Clientor works, and get guidance on managing
            your clients, invoices, payments, and business.
          </Typography>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-2xl">
            <label htmlFor="help-search" className="sr-only">
              Search the Help Center
            </label>

            <div className="relative">
              <Search
                size={20}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
              />

              <input
                id="help-search"
                type="search"
                value={query}
                onChange={(event) => handleChange(event.target.value)}
                placeholder="Search for answers..."
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

export default HelpCenterHero;
