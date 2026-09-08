import ThemeSwitcher from "./components/ThemeSwitcher";
import Container from "./components/ui/Container";
import Section from "./components/ui/Section";
import Typography from "./components/ui/Typography";

function App() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Section>
        <Container>
          <ThemeSwitcher />

          <div className="space-y-6">
            <Typography variant="display">
              Run your business with Clientor.
            </Typography>

            <Typography variant="h2">Everything in one place.</Typography>

            <Typography variant="body-lg">
              Manage your clients, invoices, payments, and expenses with a
              clean, focused workspace.
            </Typography>

            <Typography variant="body">
              This is standard body text for Clientor.
            </Typography>

            <Typography variant="body-sm">
              This is smaller supporting text.
            </Typography>

            <Typography variant="caption">Last updated today</Typography>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default App;
