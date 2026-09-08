import type { ReactNode } from "react";
import Footer from "../components/website/Footer";
import Navbar from "../components/website/Navbar";

type PublicLayoutProps = {
  children: ReactNode;
};

function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default PublicLayout;
