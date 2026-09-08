import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Typography from "../../ui/Typography";

const audiences = [
  "Freelancers",
  "Consultants",
  "Small businesses",
  "Independent professionals",
];

function BuiltForBusiness() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <Typography variant="h2">
              Made for people running the business.
            </Typography>

            <Typography variant="body" className="mt-4 text-text-secondary">
              Whether you're working independently or managing a small team,
              Clientor keeps your everyday business operations organized.
            </Typography>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="rounded-lg border border-border bg-surface-raised px-5 py-4"
              >
                <p className="text-sm font-medium">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default BuiltForBusiness;
