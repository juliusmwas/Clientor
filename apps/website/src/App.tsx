import Input from "./components/ui/Input";
import Label from "./components/ui/Label";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2">
          <Label htmlFor="client-name" required>
            Client name
          </Label>

          <Input id="client-name" placeholder="Enter client name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>

          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
      </div>
    </main>
  );
}

export default App;
