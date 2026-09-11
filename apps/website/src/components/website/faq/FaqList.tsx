import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";
import type { FaqItem } from "../../../data/faq";

type FaqListProps = {
  items: FaqItem[];
};

function FaqList({ items }: FaqListProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto max-w-3xl">
          {items.length > 0 ? (
            <div className="space-y-3">
              {items.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-lg border border-border bg-surface-raised"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      onClick={() => toggleItem(item.id)}
                      className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary sm:px-6"
                    >
                      <span className="text-sm font-semibold text-text-primary sm:text-base">
                        {item.question}
                      </span>

                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={`shrink-0 text-text-muted transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${item.id}`}
                        className="border-t border-border px-5 pb-5 pt-4 sm:px-6"
                      >
                        <p className="text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-surface-raised px-6 py-12 text-center">
              <Typography variant="h3">No questions found</Typography>

              <Typography
                variant="body"
                className="mx-auto mt-3 max-w-md text-text-secondary"
              >
                We couldn't find an FAQ matching your search. Try another search
                term or visit the Help Center.
              </Typography>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default FaqList;
