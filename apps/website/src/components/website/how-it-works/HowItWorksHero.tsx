import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

function HowItWorksHero() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            How Clientor works
          </span>

          <Typography variant="display" className="mt-6">
            A straightforward workflow for running your business.
          </Typography>

          <Typography
            variant="body-lg"
            className="mx-auto mt-5 max-w-2xl text-text-secondary"
          >
            Set up your workspace, organize your clients and work, manage
            invoices, and keep payment records up to date from one place.
          </Typography>
        </div>
      </Container>
    </Section>
  );
}

export default HowItWorksHero;
