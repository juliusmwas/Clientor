import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

function FaqCta() {
  return (
    <Section>
      <Container>
        <div className="rounded-xl border border-border bg-surface-raised px-6 py-12 text-center sm:px-10">
          <Typography variant="h2">Didn't find your answer?</Typography>

          <Typography
            variant="body"
            className="mx-auto mt-4 max-w-xl text-text-secondary"
          >
            Browse the Help Center for detailed guides or contact us if you need
            more help.
          </Typography>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/help"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-surface-raised px-5 text-sm font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Visit Help Center
            </Link>

            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact Clientor
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default FaqCta;
