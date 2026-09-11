export type HelpArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    steps?: string[];
  }[];
};

export const helpArticles: HelpArticle[] = [
  {
    slug: "first-invoice",
    title: "How to create your first invoice",
    description:
      "Learn the basic steps for creating and preparing an invoice in Clientor.",
    category: "Invoices",
    readTime: "3 min read",
    sections: [
      {
        heading: "Before you start",
        paragraphs: [
          "Make sure your workspace has been set up and that you have the client you want to invoice available in Clientor.",
        ],
      },
      {
        heading: "Create an invoice",
        steps: [
          "Open Invoices from the workspace navigation.",
          "Choose the option to create a new invoice.",
          "Select or add the client you want to invoice.",
          "Add the products or services being billed.",
          "Review the invoice details, including the invoice date and due date.",
          "Save the invoice as a draft or send it when it is ready.",
        ],
      },
      {
        heading: "Review before sending",
        paragraphs: [
          "Before sending an invoice, check the client details, invoice items, quantities, amounts, and payment instructions.",
          "Keeping invoice information accurate helps make payment tracking and reporting easier later.",
        ],
      },
      {
        heading: "What happens next?",
        paragraphs: [
          "Once an invoice has been sent, you can continue to monitor its status from the Invoices area. Payments can be recorded against the invoice when they are received.",
        ],
      },
    ],
  },
  {
    slug: "add-client",
    title: "How to add a client",
    description:
      "Learn how to create a client record and keep customer information organized.",
    category: "Clients",
    readTime: "2 min read",
    sections: [
      {
        heading: "Why add clients to Clientor?",
        paragraphs: [
          "Client records provide a central place for the information you need when working with customers and creating invoices.",
        ],
      },
      {
        heading: "Add a client",
        steps: [
          "Open Clients from the workspace navigation.",
          "Choose the option to add a new client.",
          "Enter the client information requested by Clientor.",
          "Review the information for accuracy.",
          "Save the client record.",
        ],
      },
      {
        heading: "What can you use the client record for?",
        paragraphs: [
          "Client records can be used when organizing projects and creating invoices for that customer.",
          "Keeping client information current reduces the need to repeatedly enter the same information when working with them.",
        ],
      },
    ],
  },
  {
    slug: "record-payment",
    title: "How payments are recorded",
    description:
      "Understand how payments are manually recorded and tracked in Clientor.",
    category: "Payments",
    readTime: "3 min read",
    sections: [
      {
        heading: "How Clientor handles payments",
        paragraphs: [
          "Clientor V1 does not process customer payments directly. When you receive a payment outside Clientor, you can record that payment in the workspace.",
        ],
      },
      {
        heading: "Record a payment",
        steps: [
          "Open Payments from the workspace navigation.",
          "Choose the option to record a payment.",
          "Select the invoice associated with the payment.",
          "Enter the payment amount.",
          "Select the payment method.",
          "Enter the payment date and any relevant notes.",
          "Review the information and save the payment.",
        ],
      },
      {
        heading: "Payment methods",
        paragraphs: [
          "Clientor V1 supports recording payment methods such as M-Pesa, bank transfer, cash, cheque, card, PayPal, and other manually recorded methods.",
        ],
      },
      {
        heading: "Partial payments",
        paragraphs: [
          "If the recorded payment does not cover the full invoice amount, the invoice can remain partially paid with the remaining balance still outstanding.",
        ],
      },
    ],
  },
  {
    slug: "manage-workspace",
    title: "How to manage your workspace",
    description:
      "Learn the basics of managing your business workspace and its settings.",
    category: "Account & Settings",
    readTime: "3 min read",
    sections: [
      {
        heading: "What is a workspace?",
        paragraphs: [
          "A workspace represents the business environment where your clients, projects, invoices, payments, expenses, and other business information are managed.",
        ],
      },
      {
        heading: "Set up your workspace",
        steps: [
          "Open your workspace settings.",
          "Review your business information.",
          "Configure the workspace preferences available to you.",
          "Review invoice and payment-related settings before creating invoices.",
          "Save your changes.",
        ],
      },
      {
        heading: "Managing your team",
        paragraphs: [
          "If your workspace uses team members, you can manage workspace membership through the Team area according to the permissions available to your role.",
        ],
      },
      {
        heading: "Keep your information current",
        paragraphs: [
          "Review your workspace information whenever important business details change so that new invoices and business records contain accurate information.",
        ],
      },
    ],
  },
];

export function getHelpArticle(slug: string) {
  return helpArticles.find((article) => article.slug === slug);
}
