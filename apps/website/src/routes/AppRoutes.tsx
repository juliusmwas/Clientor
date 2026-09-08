import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">Clientor</h1>

      <p className="mt-4 text-text-secondary">Your business, organized.</p>
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PublicLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;
