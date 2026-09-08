import { BarChart3, Bell, FileCheck2, UsersRound } from "lucide-react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const features = [
  {
    icon: UsersRound,
    title: "Keep client relationships organized",
    description:
      "Store the information you need about each client and keep their projects, invoices, and payment records connected.",
    points: [
      "Centralized client records",
      "Connected projects and invoices",
      "Payment history at a glance",
    ],
  },
  {
    icon: FileCheck2,
    title: "Make invoicing straightforward",
    description:
      "Create clear invoices, manage their lifecycle, and keep billing information easy to understand.",
    points: [
      "Professional invoice layouts",
      "Clear invoice statuses",
      "Outstanding balances tracked",
    ],
  },
  {
    icon: BarChart3,
    title: "Understand your business",
    description:
      "Get a practical overview of the information that matters without turning Clientor into a complicated accounting platform.",
    points: [
      "Business overview",
      "Operational reports",
      "Useful financial visibility",
    ],
  },
  {
    icon: Bell,
    title: "Stay on top of important activity",
    description:
      "Keep important updates visible so you can respond to business activity without constantly checking different places.",
    points: [
      "In-app notifications",
      "Relevant account updates",
      "Organized workspace activity",
    ],
  },
];

function FeatureDetail() {
  return (
    <Section>
      <Container>
        <div className="space-y-16 lg:space-y-24">
          {features.map(({ icon: Icon, title, description, points }, index) => (
            <div
              key={title}
              className={[
                "grid gap-10 lg:grid-cols-2 lg:items-center",
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : "",
              ].join(" ")}
            >
              <div>
                <div className="flex size-11 items-center justify-center rounded-md bg-primary-light text-primary">
                  <Icon size={21} aria-hidden="true" />
                </div>

                <Typography variant="h2" className="mt-5">
                  {title}
                </Typography>

                <Typography variant="body" className="mt-4 text-text-secondary">
                  {description}
                </Typography>

                <ul className="mt-6 space-y-3">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-h-64 rounded-xl border border-border bg-surface p-6">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-32 rounded bg-border/70" />
                  <div className="h-8 w-20 rounded-md bg-primary/10" />
                </div>

                <div className="mt-8 space-y-3">
                  <div className="h-12 rounded-lg border border-border bg-surface-raised" />
                  <div className="h-12 rounded-lg border border-border bg-surface-raised" />
                  <div className="h-12 rounded-lg border border-border bg-surface-raised" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FeatureDetail;
