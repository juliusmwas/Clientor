import FormField from "./components/ui/FormField";
import Input from "./components/ui/Input";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto max-w-md space-y-6">
        <FormField
          label="Client name"
          htmlFor="client-name"
          required
          helpText="Enter the client's full name."
        >
          <Input id="client-name" />
        </FormField>

        <FormField
          label="Email address"
          htmlFor="email"
          error="Please enter a valid email address."
        >
          <Input id="email" error />
        </FormField>
      </div>
    </main>
  );
}

export default App;
