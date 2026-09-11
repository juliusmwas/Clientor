import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

function ContactCta() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="rounded-xl border border-border bg-surface-raised px-6 py-12 text-center sm:px-10">
          <Typography variant="h2">Need help using Clientor?</Typography>

          <Typography
            variant="body"
            className="mx-auto mt-4 max-w-xl text-text-secondary"
          >
            Find product guidance and answers to common questions in the Help
            Center.
          </Typography>

          <Link
            to="/help"
            className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-surface-raised px-5 text-sm font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Visit Help Center
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default ContactCta;
