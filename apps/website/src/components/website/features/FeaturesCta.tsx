import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

function FeaturesCta() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="rounded-xl border border-border bg-surface-raised px-6 py-12 text-center sm:px-10">
          <Typography variant="h2">
            Bring your business into one workspace.
          </Typography>

          <Typography
            variant="body"
            className="mx-auto mt-4 max-w-xl text-text-secondary"
          >
            Keep your clients, work, invoices, payments, and records organized
            with Clientor.
          </Typography>

          <Link
            to="/get-started"
            className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get Started
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default FeaturesCta;
