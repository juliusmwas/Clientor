export type FaqCategory =
  | "General"
  | "Invoices"
  | "Payments"
  | "Clients & Projects"
  | "Expenses & Reports"
  | "Account & Team";

export type FaqItem = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "what-is-clientor",
    category: "General",
    question: "What is Clientor?",
    answer:
      "Clientor is a business management workspace that helps you manage clients, projects, products and services, invoices, payments, expenses, and business reports in one place.",
  },
  {
    id: "who-is-clientor-for",
    category: "General",
    question: "Who is Clientor for?",
    answer:
      "Clientor is designed for freelancers, small businesses, and teams that need a simple way to organize client work and manage their invoicing and business records.",
  },
  {
    id: "does-clientor-process-payments",
    category: "General",
    question: "Does Clientor process customer payments?",
    answer:
      "No. Clientor V1 does not process payments or connect directly to payment providers. Payments received outside Clientor can be recorded manually in your workspace.",
  },
  {
    id: "how-create-invoice",
    category: "Invoices",
    question: "How do I create an invoice?",
    answer:
      "Open Invoices in your workspace, create a new invoice, select the client, add the products or services being billed, review the invoice details, and save or send the invoice when it is ready.",
  },
  {
    id: "invoice-statuses",
    category: "Invoices",
    question: "What invoice statuses does Clientor support?",
    answer:
      "Clientor supports Draft, Sent, Viewed, Partially Paid, Paid, Overdue, and Cancelled invoice states. Viewed is used when that status is available in the relevant workflow.",
  },
  {
    id: "partial-payment",
    category: "Invoices",
    question: "Can an invoice be partially paid?",
    answer:
      "Yes. If a recorded payment is less than the invoice amount, Clientor can show the invoice as partially paid while keeping the remaining balance outstanding.",
  },
  {
    id: "overdue-invoice",
    category: "Invoices",
    question: "How is an invoice considered overdue?",
    answer:
      "An invoice becomes overdue when its due date has passed and there is still an outstanding balance.",
  },
  {
    id: "record-payment",
    category: "Payments",
    question: "How do I record a payment?",
    answer:
      "Open Payments, choose to record a payment, select the relevant invoice, enter the payment amount and method, provide the payment date, and save the record.",
  },
  {
    id: "payment-methods",
    category: "Payments",
    question: "Which payment methods can I record?",
    answer:
      "Clientor V1 supports manually recording methods including M-Pesa, bank transfer, cash, cheque, card, PayPal, and other payment methods.",
  },
  {
    id: "payment-verification",
    category: "Payments",
    question: "Does Clientor verify payments automatically?",
    answer:
      "No. Clientor V1 records payments entered by the workspace user. It does not automatically verify M-Pesa, bank, card, PayPal, or other external payment transactions.",
  },
  {
    id: "add-client",
    category: "Clients & Projects",
    question: "How do I add a client?",
    answer:
      "Open Clients from the workspace navigation, choose to add a client, enter the required client information, review it, and save the client record.",
  },
  {
    id: "projects",
    category: "Clients & Projects",
    question: "Can I organize work into projects?",
    answer:
      "Yes. Clientor includes Projects so you can organize client work and keep related business activity connected to the appropriate client.",
  },
  {
    id: "expense-recording",
    category: "Expenses & Reports",
    question: "Can I record business expenses?",
    answer:
      "Yes. Clientor V1 includes Expenses for manually recording and organizing business expenses.",
  },
  {
    id: "reports",
    category: "Expenses & Reports",
    question: "What are Reports used for?",
    answer:
      "Reports provide an overview of relevant business activity and help you understand information recorded in your Clientor workspace.",
  },
  {
    id: "team-roles",
    category: "Account & Team",
    question: "Can I add team members?",
    answer:
      "Yes. Clientor V1 supports workspace teams with Owner, Admin, and Member roles.",
  },
  {
    id: "workspace-owner",
    category: "Account & Team",
    question: "Can a workspace have multiple owners?",
    answer:
      "No. Clientor V1 supports exactly one Owner for a workspace. Additional users can be assigned other supported team roles.",
  },
  {
    id: "theme",
    category: "Account & Team",
    question: "Does Clientor support dark mode?",
    answer:
      "Yes. Clientor supports light and dark themes, with a system option available through the interface.",
  },
];

export const faqCategories: FaqCategory[] = [
  "General",
  "Invoices",
  "Payments",
  "Clients & Projects",
  "Expenses & Reports",
  "Account & Team",
];
