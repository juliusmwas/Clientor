import Card from "./components/ui/Card";
import Divider from "./components/ui/Divider";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto max-w-md">
        <Card>
          <h2 className="text-lg font-semibold">Business settings</h2>

          <p className="mt-2 text-sm text-text-secondary">
            Manage your Clientor business preferences.
          </p>

          <Divider className="my-6" />

          <div className="flex items-center justify-between">
            <span className="text-sm">Email notifications</span>

            <span className="text-sm text-text-muted">Enabled</span>
          </div>

          <Divider className="my-6" />

          <div className="flex items-center justify-between">
            <span className="text-sm">Invoice reminders</span>

            <span className="text-sm text-text-muted">Enabled</span>
          </div>
        </Card>
      </div>
    </main>
  );
}

export default App;
