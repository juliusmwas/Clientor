import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const steps = [
  {
    number: "01",
    title: "Add your clients",
    description:
      "Create organized client records so important business information stays easy to find.",
  },
  {
    number: "02",
    title: "Manage your work",
    description:
      "Connect projects, products, and services to the work you actually do.",
  },
  {
    number: "03",
    title: "Invoice and record payments",
    description:
      "Send invoices, track their status, and record payments as they come in.",
  },
];

function HowItWorks() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Typography variant="h2">A simpler way to stay organized.</Typography>

          <Typography variant="body" className="mt-4 text-text-secondary">
            Clientor gives you a straightforward workflow for managing the core
            parts of your business.
          </Typography>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-border pt-5">
              <span className="text-sm font-semibold text-primary">
                {step.number}
              </span>

              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>

              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default HowItWorks;
