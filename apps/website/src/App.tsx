import Badge from "./components/ui/Badge";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="flex flex-wrap gap-3">
        <Badge>Draft</Badge>

        <Badge variant="success">Paid</Badge>

        <Badge variant="warning">Overdue</Badge>

        <Badge variant="error">Cancelled</Badge>

        <Badge variant="info">Viewed</Badge>
      </div>
    </main>
  );
}

export default App;
