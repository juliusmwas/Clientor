import {
  ArrowRight,
  CreditCard,
  FileText,
  FolderKanban,
  Users,
} from "lucide-react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const workflow = [
  {
    icon: Users,
    title: "Client",
    description: "Who you work with",
  },
  {
    icon: FolderKanban,
    title: "Project",
    description: "What you are working on",
  },
  {
    icon: FileText,
    title: "Invoice",
    description: "What you are billing",
  },
  {
    icon: CreditCard,
    title: "Payment",
    description: "What has been received",
  },
];

function ConnectedWorkflow() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Typography variant="h2">
            Your business information stays connected.
          </Typography>

          <Typography variant="body" className="mt-4 text-text-secondary">
            Instead of managing disconnected records, Clientor keeps the
            important relationships between your clients, work, invoices, and
            payments visible.
          </Typography>
        </div>

        <div className="mt-12 flex flex-col items-stretch justify-center gap-3 md:flex-row md:items-center">
          {workflow.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="flex items-center gap-3 md:flex-1">
              <div className="w-full rounded-lg border border-border bg-surface-raised p-5 text-center">
                <div className="mx-auto flex size-10 items-center justify-center rounded-md bg-primary-light text-primary">
                  <Icon size={20} aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-sm font-semibold">{title}</h3>

                <p className="mt-1 text-xs text-text-muted">{description}</p>
              </div>

              {index < workflow.length - 1 && (
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="hidden shrink-0 text-text-muted md:block"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ConnectedWorkflow;
