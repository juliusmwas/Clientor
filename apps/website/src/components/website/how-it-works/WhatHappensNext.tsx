import { BarChart3, Bell, CircleDollarSign } from "lucide-react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const items = [
  {
    icon: CircleDollarSign,
    title: "Know what is outstanding",
    description:
      "See which invoices still have balances and keep overdue work visible.",
  },
  {
    icon: BarChart3,
    title: "Review your business activity",
    description:
      "Use your dashboard and reports to understand the information that matters to your business.",
  },
  {
    icon: Bell,
    title: "Keep important updates visible",
    description:
      "Stay informed about invoices, payments, overdue activity, and other relevant workspace updates.",
  },
];

function WhatHappensNext() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Typography variant="h2">
              Once your workflow is in place, staying organized becomes easier.
            </Typography>

            <Typography variant="body" className="mt-4 text-text-secondary">
              Clientor gives you a clear place to return to whenever you need to
              check what is happening in your business.
            </Typography>
          </div>

          <div className="space-y-4">
            {items.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 rounded-lg border border-border bg-surface-raised p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-light text-primary">
                  <Icon size={20} aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-base font-semibold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default WhatHappensNext;
