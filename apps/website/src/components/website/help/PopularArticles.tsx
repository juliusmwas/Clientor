import { ArrowRight, FilePlus2, UserPlus, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

type Article = {
  id: string;
  title: string;
  description: string;
  icon: typeof FilePlus2;
};

const articles: Article[] = [
  {
    id: "first-invoice",
    title: "How to create your first invoice",
    description:
      "Learn the basic steps for creating and preparing an invoice in Clientor.",
    icon: FilePlus2,
  },
  {
    id: "add-client",
    title: "How to add a client",
    description:
      "Learn how to create a client record and keep your customer information organized.",
    icon: UserPlus,
  },
  {
    id: "record-payment",
    title: "How payments are recorded",
    description:
      "Understand how to manually record payments and keep invoice balances up to date.",
    icon: WalletCards,
  },
  {
    id: "manage-workspace",
    title: "How to manage your workspace",
    description:
      "Learn the basics of managing your business workspace and its settings.",
    icon: WalletCards,
  },
];

type PopularArticlesProps = {
  searchQuery: string;
};

function PopularArticles({ searchQuery }: PopularArticlesProps) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredArticles = articles.filter((article) => {
    if (!normalizedQuery) {
      return true;
    }

    return (
      article.title.toLowerCase().includes(normalizedQuery) ||
      article.description.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <Section className="bg-surface">
      <Container>
        <div className="max-w-2xl">
          <Typography variant="h2">Popular articles</Typography>

          <Typography variant="body" className="mt-3 text-text-secondary">
            Start with some of the most useful guides for getting familiar with
            Clientor.
          </Typography>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {filteredArticles.map(({ id, title, description, icon: Icon }) => (
              <Link
                key={id}
                to={`/help/articles/${id}`}
                className="group rounded-lg border border-border bg-surface-raised p-5 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-light text-primary">
                    <Icon size={20} aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-text-primary">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Read article
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-border bg-surface-raised px-6 py-10 text-center">
            <Typography variant="h3">No articles found</Typography>

            <Typography
              variant="body"
              className="mx-auto mt-3 max-w-md text-text-secondary"
            >
              We couldn't find an article matching your search. Try a different
              term or contact us for help.
            </Typography>
          </div>
        )}
      </Container>
    </Section>
  );
}

export default PopularArticles;
