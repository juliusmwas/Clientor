import { CreditCard, FilePlus2, Settings2, UsersRound } from "lucide-react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const steps = [
  {
    number: "01",
    icon: Settings2,
    title: "Set up your workspace",
    description:
      "Add your business information and configure the workspace around how you operate.",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "Add clients and organize your work",
    description:
      "Create client records, add projects, and keep the work you do connected to the right people.",
  },
  {
    number: "03",
    icon: FilePlus2,
    title: "Create and send invoices",
    description:
      "Use your client and product information to create clear invoices and keep their status visible.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Record payments and stay informed",
    description:
      "Record payments as they are received, track outstanding balances, and keep your business records current.",
  },
];

function WorkflowSteps() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Typography variant="h2">
            From setup to payment, kept simple.
          </Typography>

          <Typography variant="body" className="mt-4 text-text-secondary">
            Clientor follows the natural flow of your day-to-day business
            operations.
          </Typography>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div key={number} className="relative">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-light text-primary">
                  <Icon size={20} aria-hidden="true" />
                </div>

                <span className="text-sm font-semibold text-primary">
                  {number}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default WorkflowSteps;
