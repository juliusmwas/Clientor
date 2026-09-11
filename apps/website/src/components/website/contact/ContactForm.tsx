import { useState, type FormEvent } from "react";
import { z } from "zod";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import FormField from "../../ui/FormField";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please enter a subject."),
  message: z.string().trim().min(10, "Please enter at least 10 characters."),
});

type FormValues = z.infer<typeof contactSchema>;

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: FormErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormValues;

        if (!nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      });

      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <Card padding="lg">
      <div>
        <h2 className="text-xl font-semibold">Send us a message</h2>

        <p className="mt-2 text-sm leading-6 text-text-secondary">
          Fill in the form below and provide as much detail as you can.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
        <FormField
          label="Name"
          htmlFor="contact-name"
          required
          error={errors.name}
        >
          <Input
            id="contact-name"
            name="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            error={Boolean(errors.name)}
            autoComplete="name"
          />
        </FormField>

        <FormField
          label="Email address"
          htmlFor="contact-email"
          required
          error={errors.email}
        >
          <Input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            error={Boolean(errors.email)}
            autoComplete="email"
          />
        </FormField>

        <FormField
          label="Subject"
          htmlFor="contact-subject"
          required
          error={errors.subject}
        >
          <Input
            id="contact-subject"
            name="subject"
            value={values.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            error={Boolean(errors.subject)}
          />
        </FormField>

        <FormField
          label="Message"
          htmlFor="contact-message"
          required
          error={errors.message}
        >
          <Textarea
            id="contact-message"
            name="message"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            error={Boolean(errors.message)}
            rows={7}
          />
        </FormField>

        {submitted && (
          <div
            role="status"
            className="rounded-md border border-primary/20 bg-primary-light px-4 py-3 text-sm text-primary"
          >
            Your message has been validated and is ready to be sent. Submission
            will be connected when the backend contact endpoint is implemented.
          </div>
        )}

        <Button type="submit">Send Message</Button>
      </form>
    </Card>
  );
}

export default ContactForm;
