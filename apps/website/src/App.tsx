import FormField from "./components/ui/FormField";
import Textarea from "./components/ui/Textarea";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto max-w-md space-y-6">
        <FormField
          label="Client notes"
          htmlFor="client-notes"
          helpText="Add any additional information about this client."
        >
          <Textarea id="client-notes" placeholder="Enter notes..." />
        </FormField>

        <FormField
          label="Description"
          htmlFor="description"
          error="Description is required."
        >
          <Textarea
            id="description"
            error
            placeholder="Enter a description..."
          />
        </FormField>

        <FormField label="Disabled field" htmlFor="disabled-field">
          <Textarea
            id="disabled-field"
            disabled
            placeholder="This field is disabled"
          />
        </FormField>
      </div>
    </main>
  );
}

export default App;
