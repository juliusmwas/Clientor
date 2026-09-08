import Switch from "./components/ui/Switch";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto max-w-md space-y-6">
        <ThemeSwitcher></ThemeSwitcher>
        <label className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">Email notifications</span>

          <Switch defaultChecked />
        </label>

        <label className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">Invoice reminders</span>

          <Switch />
        </label>

        <label className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium">Disabled setting</span>

          <Switch disabled />
        </label>
      </div>
    </main>
  );
}

export default App;
