import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <h1 className="text-4xl font-bold">Clientor</h1>

        <ThemeSwitcher />
      </div>
    </main>
  );
}

export default App;
