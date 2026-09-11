import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";
import { helpArticles, type HelpArticle } from "../../../data/helpArticles";

type RelatedArticlesProps = {
  currentArticle: HelpArticle;
};

function RelatedArticles({ currentArticle }: RelatedArticlesProps) {
  const relatedArticles = helpArticles
    .filter((article) => article.slug !== currentArticle.slug)
    .filter((article) => article.category === currentArticle.category)
    .slice(0, 2);

  const fallbackArticles =
    relatedArticles.length > 0
      ? relatedArticles
      : helpArticles
          .filter((article) => article.slug !== currentArticle.slug)
          .slice(0, 2);

  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Typography variant="h2">Related articles</Typography>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {fallbackArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/help/articles/${article.slug}`}
                className="group rounded-lg border border-border bg-surface-raised p-5 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-primary">
                      {article.category}
                    </p>

                    <h3 className="mt-2 text-base font-semibold text-text-primary">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {article.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default RelatedArticles;
