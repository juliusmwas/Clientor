import Checkbox from "./components/ui/Checkbox";
import Label from "./components/ui/Label";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto max-w-md space-y-6">
        <label className="flex items-center gap-3">
          <Checkbox />

          <Label>Send me email notifications</Label>
        </label>

        <label className="flex items-center gap-3">
          <Checkbox defaultChecked />

          <Label>Enable automatic reminders</Label>
        </label>

        <label className="flex items-center gap-3">
          <Checkbox disabled />

          <Label>Disabled option</Label>
        </label>

        <label className="flex items-center gap-3">
          <Checkbox error />

          <Label>Option with an error</Label>
        </label>
      </div>
    </main>
  );
}

export default App;
