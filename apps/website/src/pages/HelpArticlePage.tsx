import { Link, useParams } from "react-router-dom";
import HelpArticle from "../components/website/help/HelpArticle";
import HelpArticleContent from "../components/website/help/HelpArticleContent";
import RelatedArticles from "../components/website/help/RelatedArticles";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Typography from "../components/ui/Typography";
import { getHelpArticle } from "../data/helpArticles";

function HelpArticlePage() {
  const { slug } = useParams();

  const article = slug ? getHelpArticle(slug) : undefined;

  if (!article) {
    return (
      <>
        <Section spacing="xl">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Typography variant="display">Article not found</Typography>

              <Typography
                variant="body-lg"
                className="mt-4 text-text-secondary"
              >
                The help article you're looking for doesn't exist or may have
                been moved.
              </Typography>

              <Link
                to="/help"
                className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Back to Help Center
              </Link>
            </div>
          </Container>
        </Section>
      </>
    );
  }

  return (
    <>
      <HelpArticle article={article} />

      <Section spacing="lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <HelpArticleContent article={article} />
          </div>
        </Container>
      </Section>

      <RelatedArticles currentArticle={article} />
    </>
  );
}

export default HelpArticlePage;
