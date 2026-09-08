import { BriefcaseBusiness, CreditCard, FileText, Users } from "lucide-react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const values = [
  {
    icon: Users,
    title: "Clients",
    description:
      "Keep client information and relationships organized in one place.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Projects",
    description: "Keep track of the work behind every client and invoice.",
  },
  {
    icon: FileText,
    title: "Invoices",
    description: "Create professional invoices and keep their status clear.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Record payments and always know what has been received.",
  },
];

function ValueProposition() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Typography variant="h2">
            Everything important, in one place.
          </Typography>

          <Typography variant="body" className="mt-4 text-text-secondary">
            Clientor keeps the everyday parts of running your business organized
            without adding unnecessary complexity.
          </Typography>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <div className="flex size-10 items-center justify-center rounded-md bg-primary-light text-primary">
                <Icon size={20} aria-hidden="true" />
              </div>

              <h3 className="mt-4 text-base font-semibold">{title}</h3>

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

export default ValueProposition;
