import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Features from "../pages/Features";
import HelpCenter from "../pages/HelpCenter";
import Home from "../pages/Home";
import HowItWorks from "../pages/HowItWorks";
import HelpArticlePage from "../pages/HelpArticlePage";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-text-primary">{title}</h1>

      <p className="mt-4 text-text-secondary">This page is coming next.</p>
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/features" element={<Features />} />

          <Route path="/how-it-works" element={<HowItWorks />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/help" element={<HelpCenter />} />
          <Route path="/help/articles/:slug" element={<HelpArticlePage />} />

          <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />

          <Route
            path="/privacy"
            element={<PlaceholderPage title="Privacy Policy" />}
          />

          <Route
            path="/terms"
            element={<PlaceholderPage title="Terms of Service" />}
          />

          <Route path="/login" element={<PlaceholderPage title="Log In" />} />

          <Route
            path="/get-started"
            element={<PlaceholderPage title="Get Started" />}
          />
        </Routes>
      </PublicLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;
