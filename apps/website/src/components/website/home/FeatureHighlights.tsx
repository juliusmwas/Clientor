import { BarChart3, FileCheck2, FolderKanban, UsersRound } from "lucide-react";
import Card from "../../ui/Card";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const features = [
  {
    icon: UsersRound,
    title: "Client management",
    description:
      "Keep contact details, projects, invoices, and payment history connected to the right client.",
  },
  {
    icon: FolderKanban,
    title: "Project organization",
    description:
      "Understand what work is active, who it belongs to, and how it connects to your billing.",
  },
  {
    icon: FileCheck2,
    title: "Professional invoicing",
    description:
      "Create clear invoices, monitor their status, and keep your billing records organized.",
  },
  {
    icon: BarChart3,
    title: "Business overview",
    description:
      "See the information that matters most without turning your workspace into an accounting system.",
  },
];

function FeatureHighlights() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Typography variant="h2">
            Built around the work you actually do.
          </Typography>

          <Typography variant="body" className="mt-4 text-text-secondary">
            The essentials are easy to access, connected, and designed to stay
            out of your way.
          </Typography>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} padding="lg">
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

export default FeatureHighlights;
