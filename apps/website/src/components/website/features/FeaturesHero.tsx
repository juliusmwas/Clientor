import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

function FeaturesHero() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            Clientor features
          </span>

          <Typography variant="display" className="mt-6">
            Everything you need to run your business, without the clutter.
          </Typography>

          <Typography
            variant="body-lg"
            className="mx-auto mt-5 max-w-2xl text-text-secondary"
          >
            Clientor brings your clients, projects, billing, payments, and
            business records together in one straightforward workspace.
          </Typography>
        </div>
      </Container>
    </Section>
  );
}

export default FeaturesHero;
