import { CheckCircle2, Eye, Layers3, SlidersHorizontal } from "lucide-react";
import Card from "../../ui/Card";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const principles = [
  {
    icon: SlidersHorizontal,
    title: "Simplicity",
    description:
      "Business software should be understandable without requiring a complicated setup or learning curve.",
  },
  {
    icon: Eye,
    title: "Clarity",
    description:
      "Important information should be easy to find and business activity should be easy to understand.",
  },
  {
    icon: CheckCircle2,
    title: "Practicality",
    description:
      "Features should solve real operational problems rather than exist simply because they can be built.",
  },
  {
    icon: Layers3,
    title: "Connected work",
    description:
      "Clients, projects, invoices, payments, and records should work together instead of becoming isolated data.",
  },
];

function WhatWeBelieve() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Typography variant="h2">What we believe</Typography>

          <Typography variant="body" className="mt-4 text-text-secondary">
            These principles guide how Clientor is designed and how the product
            grows.
          </Typography>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {principles.map(({ icon: Icon, title, description }) => (
            <Card key={title} padding="lg" className="h-full">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary-light text-primary">
                <Icon size={20} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-lg font-semibold">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default WhatWeBelieve;
