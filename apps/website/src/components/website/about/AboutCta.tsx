import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

function AboutCta() {
  return (
    <Section>
      <Container>
        <div className="rounded-xl border border-border bg-surface-raised px-6 py-12 text-center sm:px-10">
          <Typography variant="h2">
            Build a clearer way to run your business.
          </Typography>

          <Typography
            variant="body"
            className="mx-auto mt-4 max-w-xl text-text-secondary"
          >
            Keep your everyday business operations organized with Clientor.
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

export default AboutCta;
