import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

function ContactHero() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            Contact Clientor
          </span>

          <Typography variant="display" className="mt-6">
            We'd like to hear from you.
          </Typography>

          <Typography
            variant="body-lg"
            className="mx-auto mt-5 max-w-2xl text-text-secondary"
          >
            Have a question about Clientor, want to share feedback, or have a
            business inquiry? Send us a message and we'll get back to you.
          </Typography>
        </div>
      </Container>
    </Section>
  );
}

export default ContactHero;
