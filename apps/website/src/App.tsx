import ThemeSwitcher from "./components/ThemeSwitcher";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";

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

      <div className="mx-auto max-w-4xl mt-10">
        <Card>
          <h2 className="text-lg font-semibold">Card title</h2>

          <p className="mt-2 text-sm text-text-secondary">
            This is a reusable Clientor card component.
          </p>
        </Card>
      </div>
    </main>
  );
}

export default App;
