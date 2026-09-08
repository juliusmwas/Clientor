import { Link } from "react-router-dom";
import { useTheme } from "../../lib/useTheme";

import lightLogo from "../../assets/branding/clientor-logo-light.svg";
import darkLogo from "../../assets/branding/clientor-logo-dark.svg";

function Footer() {
  const { theme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" aria-label="Clientor home">
              <img
                src={isDark ? darkLogo : lightLogo}
                alt="Clientor"
                className="h-8 w-auto"
              />
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-text-secondary">
              Simple tools to help you manage clients, projects, invoices, and
              payments with confidence.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-text-primary">Product</h2>

            <div className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
              <Link to="/features" className="hover:text-text-primary">
                Features
              </Link>

              <Link to="/how-it-works" className="hover:text-text-primary">
                How It Works
              </Link>

              <Link to="/contact" className="hover:text-text-primary">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-text-primary">
              Resources
            </h2>

            <div className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
              <Link to="/help" className="hover:text-text-primary">
                Help Center
              </Link>

              <Link to="/faq" className="hover:text-text-primary">
                FAQ
              </Link>

              <Link to="/privacy" className="hover:text-text-primary">
                Privacy
              </Link>

              <Link to="/terms" className="hover:text-text-primary">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Clientor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
