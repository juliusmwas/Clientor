import {
  BriefcaseBusiness,
  CreditCard,
  FileText,
  FolderKanban,
  Receipt,
  Users,
} from "lucide-react";
import Card from "../../ui/Card";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const features = [
  {
    icon: Users,
    title: "Clients",
    description:
      "Keep client details, activity, projects, invoices, and payment history organized together.",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    description:
      "Organize the work behind your client relationships and keep projects connected to billing.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Products & Services",
    description:
      "Maintain the products and services you regularly provide so creating invoices stays consistent.",
  },
  {
    icon: FileText,
    title: "Invoices",
    description:
      "Create professional invoices and keep track of their status from creation through payment.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Record payments as they are received and keep a clear view of what has been paid.",
  },
  {
    icon: Receipt,
    title: "Expenses",
    description:
      "Keep business expenses organized alongside the rest of your operational records.",
  },
];

function CoreFeatures() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="max-w-2xl">
          <Typography variant="h2">The essentials, connected.</Typography>

          <Typography variant="body" className="mt-4 text-text-secondary">
            Each part of Clientor is designed to work with the others, so you
            spend less time keeping separate records in separate places.
          </Typography>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
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

export default CoreFeatures;
