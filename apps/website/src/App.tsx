import ThemeSwitcher from "./components/ThemeSwitcher";
import Button from "./components/ui/Button";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <h1 className="text-4xl font-bold">Clientor</h1>

        <ThemeSwitcher />
      </div>

      <div className="mx-auto flex max-w-4xl flex-wrap gap-4 my-5">
        <Button>Primary</Button>

        <Button variant="secondary">Secondary</Button>

        <Button variant="outline">Outline</Button>

        <Button variant="ghost">Ghost</Button>

        <Button variant="danger">Danger</Button>

        <Button size="sm">Small</Button>

        <Button size="lg">Large</Button>

        <Button loading>Loading</Button>

        <Button disabled>Disabled</Button>
      </div>
    </main>
  );
}

export default App;
