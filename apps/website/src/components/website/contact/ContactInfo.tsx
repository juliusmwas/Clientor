import { HelpCircle, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Typography from "../../ui/Typography";

const contactOptions = [
  {
    icon: MessageSquare,
    title: "General inquiries",
    description: "Questions about Clientor, the product, or how it works.",
  },
  {
    icon: Send,
    title: "Feedback",
    description:
      "Tell us what you like, what could be better, or what you would like to see next.",
  },
];

function ContactInfo() {
  return (
    <div>
      <Typography variant="h2">How can we help?</Typography>

      <Typography variant="body" className="mt-4 text-text-secondary">
        Use the form to send us a message. For product guidance and common
        questions, you can also visit the Help Center.
      </Typography>

      <div className="mt-8 space-y-4">
        {contactOptions.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex gap-4 rounded-lg border border-border bg-surface-raised p-5"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-light text-primary">
              <Icon size={20} aria-hidden="true" />
            </div>

            <div>
              <h3 className="text-base font-semibold">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-border bg-surface p-5">
        <div className="flex gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-light text-primary">
            <HelpCircle size={20} aria-hidden="true" />
          </div>

          <div>
            <h3 className="text-base font-semibold">Looking for help?</h3>

            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Browse the Help Center for answers to common questions and product
              guidance.
            </p>

            <Link
              to="/help"
              className="mt-4 inline-flex text-sm font-medium text-primary hover:text-primary-hover"
            >
              Visit Help Center →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
