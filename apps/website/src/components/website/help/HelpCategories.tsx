import {
  BriefcaseBusiness,
  CircleDollarSign,
  FileText,
  FolderKanban,
  Receipt,
  Settings,
  UserRound,
  Wallet,
} from "lucide-react";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const categories = [
  {
    icon: BriefcaseBusiness,
    title: "Getting Started",
    description:
      "Learn how to set up your workspace and get started with Clientor.",
  },
  {
    icon: UserRound,
    title: "Clients",
    description: "Learn how to add, organize, and manage your clients.",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    description:
      "Keep client work organized and connected to your business activity.",
  },
  {
    icon: FileText,
    title: "Invoices",
    description: "Learn how to create, send, and manage your invoices.",
  },
  {
    icon: Wallet,
    title: "Payments",
    description:
      "Understand how payments are recorded and tracked in Clientor.",
  },
  {
    icon: Receipt,
    title: "Expenses",
    description: "Learn how to record and organize your business expenses.",
  },
  {
    icon: CircleDollarSign,
    title: "Reports",
    description:
      "Understand the information available in your business reports.",
  },
  {
    icon: Settings,
    title: "Account & Settings",
    description: "Manage your profile, workspace, preferences, and settings.",
  },
];

function HelpCategories() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Typography variant="h2">Browse by topic</Typography>

          <Typography variant="body" className="mt-3 text-text-secondary">
            Choose a topic to find guidance for the part of Clientor you need
            help with.
          </Typography>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-lg border border-border bg-surface-raised p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex size-10 items-center justify-center rounded-md bg-primary-light text-primary">
                <Icon size={20} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-base font-semibold text-text-primary">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default HelpCategories;
