import Input from "./components/ui/Input";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto max-w-md space-y-6">
        <Input placeholder="Client name" />

        <Input type="email" placeholder="Email address" />

        <Input type="number" placeholder="Amount" />

        <Input error placeholder="Invalid value" />

        <Input disabled placeholder="Disabled input" />
      </div>
    </main>
  );
}

export default App;
