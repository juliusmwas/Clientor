import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

function WhyClientor() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Typography variant="h2">Why Clientor?</Typography>

            <Typography variant="body-lg" className="mt-5 text-text-secondary">
              Running a business often means keeping track of many small but
              important details.
            </Typography>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold">The problem</h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Client information, project details, invoices, payment records,
                and expenses can easily end up spread across different tools and
                documents. Keeping everything synchronized becomes work of its
                own.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Our approach</h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Clientor brings the core operational pieces together in one
                workspace. The goal is not to add more software to your
                business, but to give you one clear place to manage the work
                already happening.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default WhyClientor;
