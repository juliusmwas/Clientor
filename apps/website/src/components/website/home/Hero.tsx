import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Typography from "../../ui/Typography";
import ProductPreview from "./ProductPreview";

function Hero() {
  return (
    <section className="overflow-hidden">
      <Container className="py-20 text-center sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            Simple business management
          </span>

          <Typography variant="display" className="mt-6 text-text-primary">
            Run your business with confidence.
          </Typography>

          <Typography
            variant="body-lg"
            className="mx-auto mt-5 max-w-2xl text-text-secondary"
          >
            Manage clients, projects, invoices, and payments from one simple
            workspace.
          </Typography>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/get-started"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get Started
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link
              to="/how-it-works"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface-raised px-5 text-sm font-medium text-text-primary transition-colors hover:bg-surface"
            >
              See How It Works
            </Link>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <ProductPreview />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
