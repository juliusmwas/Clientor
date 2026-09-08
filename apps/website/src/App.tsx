import { useState } from "react";
import Avatar from "./components/ui/Avatar";
import Badge from "./components/ui/Badge";
import Button from "./components/ui/Button";
import Dropdown from "./components/ui/Dropdown";
import Modal from "./components/ui/Modal";
import Spinner from "./components/ui/Spinner";
import Tabs from "./components/ui/Tabs";
import Toast from "./components/ui/Toast";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tab, setTab] = useState("general");

  return (
    <main className="min-h-screen bg-background p-8 text-text-primary">
      <div className="mx-auto max-w-3xl space-y-10">
        <section>
          <h1 className="text-2xl font-bold">Clientor UI Foundation</h1>

          <p className="mt-2 text-text-secondary">
            Final reusable component test.
          </p>
        </section>

        <section className="flex flex-wrap items-center gap-4">
          <Avatar fallback="JM" />

          <Avatar fallback="CL" size="lg" />

          <Badge variant="success">Paid</Badge>

          <Badge variant="warning">Overdue</Badge>

          <Spinner size="sm" />
        </section>

        <section className="flex flex-wrap gap-3">
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>

          <Dropdown
            trigger={<Button variant="outline">Actions</Button>}
            items={[
              {
                label: "Edit",
                onClick: () => {},
              },
              {
                label: "Duplicate",
                onClick: () => {},
              },
              {
                label: "Delete",
                danger: true,
                onClick: () => {},
              },
            ]}
          />
        </section>

        <section>
          <Tabs
            value={tab}
            onChange={setTab}
            tabs={[
              {
                value: "general",
                label: "General",
                content: (
                  <p className="text-sm text-text-secondary">
                    General business settings.
                  </p>
                ),
              },
              {
                value: "billing",
                label: "Billing",
                content: (
                  <p className="text-sm text-text-secondary">
                    Billing settings.
                  </p>
                ),
              },
            ]}
          />
        </section>

        <Toast
          variant="success"
          title="Payment recorded"
          message="The payment has been successfully recorded."
        />
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Confirm action"
      >
        <p className="text-sm text-text-secondary">
          This is a reusable Clientor modal component.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>

          <Button onClick={() => setModalOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
