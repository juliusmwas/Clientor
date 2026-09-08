import FormField from "./components/ui/FormField";
import Select from "./components/ui/Select";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto max-w-md space-y-6">
        <FormField label="Payment method" htmlFor="payment-method" required>
          <Select id="payment-method" defaultValue="">
            <option value="" disabled>
              Select payment method
            </option>
            <option value="mpesa">M-Pesa</option>
            <option value="bank-transfer">Bank Transfer</option>
            <option value="cash">Cash</option>
            <option value="cheque">Cheque</option>
            <option value="card">Card</option>
            <option value="paypal">PayPal</option>
            <option value="other">Other</option>
          </Select>
        </FormField>

        <FormField
          label="Status"
          htmlFor="status"
          error="Please select a valid status."
        >
          <Select id="status" error defaultValue="">
            <option value="" disabled>
              Select status
            </option>
            <option value="draft">Draft</option>
            <option value="sent">Sent</option>
            <option value="paid">Paid</option>
          </Select>
        </FormField>
      </div>
    </main>
  );
}

export default App;
