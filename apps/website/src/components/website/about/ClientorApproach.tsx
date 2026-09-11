import { CreditCard, FileText, FolderKanban, UsersRound } from "lucide-react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const areas = [
  {
    icon: UsersRound,
    title: "Clients",
    description: "Keep the people and businesses you work with organized.",
  },
  {
    icon: FolderKanban,
    title: "Work",
    description: "Connect projects and services to the work you deliver.",
  },
  {
    icon: FileText,
    title: "Billing",
    description: "Create invoices and keep their status and balances clear.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Record what has been received and maintain a reliable payment history.",
  },
];

function ClientorApproach() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Typography variant="h2">
            One workspace, built around your business.
          </Typography>

          <Typography variant="body" className="mt-4 text-text-secondary">
            Clientor focuses on the parts of business management that need to
            stay connected every day.
          </Typography>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-surface-raised p-5"
            >
              <div className="flex size-10 items-center justify-center rounded-md bg-primary-light text-primary">
                <Icon size={20} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-base font-semibold">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ClientorApproach;
