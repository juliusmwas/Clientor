import FormField from "./components/ui/FormField";
import RadioGroup from "./components/ui/RadioGroup";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto max-w-md">
        <FormField label="Payment method" required>
          <RadioGroup
            name="payment-method"
            defaultValue="mpesa"
            options={[
              {
                value: "mpesa",
                label: "M-Pesa",
              },
              {
                value: "bank-transfer",
                label: "Bank Transfer",
              },
              {
                value: "cash",
                label: "Cash",
              },
              {
                value: "cheque",
                label: "Cheque",
              },
            ]}
          />
        </FormField>
      </div>
    </main>
  );
}

export default App;
