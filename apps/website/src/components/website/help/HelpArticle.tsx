import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";
import type { HelpArticle as HelpArticleType } from "../../../data/helpArticles";

type HelpArticleProps = {
  article: HelpArticleType;
};

function HelpArticle({ article }: HelpArticleProps) {
  return (
    <Section spacing="lg">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Link
            to="/help"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Help Center
          </Link>

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
              <span className="font-medium text-primary">
                {article.category}
              </span>

              <span aria-hidden="true">•</span>

              <span>{article.readTime}</span>
            </div>

            <Typography variant="display" className="mt-4">
              {article.title}
            </Typography>

            <Typography
              variant="body-lg"
              className="mt-5 max-w-3xl text-text-secondary"
            >
              {article.description}
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HelpArticle;
