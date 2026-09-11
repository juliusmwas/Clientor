import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

function AboutHero() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            About Clientor
          </span>

          <Typography variant="display" className="mt-6">
            Business software should make work clearer, not harder.
          </Typography>

          <Typography
            variant="body-lg"
            className="mx-auto mt-5 max-w-2xl text-text-secondary"
          >
            Clientor is built to give freelancers, small businesses,
            consultants, and independent professionals a simpler way to manage
            the everyday parts of their business.
          </Typography>
        </div>
      </Container>
    </Section>
  );
}

export default AboutHero;
