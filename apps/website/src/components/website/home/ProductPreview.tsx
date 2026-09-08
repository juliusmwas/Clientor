import Badge from "../../ui/Badge";
import Card from "../../ui/Card";

function ProductPreview() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <Card padding="none" className="overflow-hidden shadow-lg">
        <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-error" />
            <span className="size-2 rounded-full bg-warning" />
            <span className="size-2 rounded-full bg-success" />
          </div>

          <span className="text-xs text-text-muted">Clientor Dashboard</span>

          <div className="w-14" />
        </div>

        <div className="grid min-h-[360px] md:grid-cols-[180px_1fr]">
          <aside className="hidden border-r border-border bg-surface p-4 md:block">
            <div className="mb-7 h-5 w-20 rounded bg-border/70" />

            <div className="space-y-2">
              {[
                "Dashboard",
                "Clients",
                "Projects",
                "Invoices",
                "Payments",
                "Reports",
              ].map((item, index) => (
                <div
                  key={item}
                  className={[
                    "rounded-md px-3 py-2 text-xs",
                    index === 0
                      ? "bg-primary-light font-medium text-primary"
                      : "text-text-muted",
                  ].join(" ")}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="bg-background p-5 sm:p-7">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs text-text-muted">Overview</p>

                <h3 className="mt-1 text-xl font-semibold">Good morning</h3>
              </div>

              <div className="h-9 w-24 rounded-md bg-primary/10" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Outstanding", "KSh 84,500"],
                ["Received", "KSh 126,000"],
                ["Clients", "24"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-border bg-surface-raised p-4"
                >
                  <p className="text-xs text-text-muted">{label}</p>

                  <p className="mt-2 text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-border bg-surface-raised">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <p className="text-sm font-semibold">Recent invoices</p>

                <span className="text-xs text-text-muted">View all</span>
              </div>

              <div className="divide-y divide-border">
                {[
                  ["INV-0042", "Acme Studio", "KSh 32,000", "Paid"],
                  ["INV-0041", "Greenline Ltd", "KSh 18,500", "Pending"],
                  ["INV-0040", "Mara Consulting", "KSh 12,000", "Overdue"],
                ].map(([invoice, client, amount, status]) => (
                  <div
                    key={invoice}
                    className="flex items-center gap-3 px-4 py-3"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium">{invoice}</p>

                      <p className="truncate text-xs text-text-muted">
                        {client}
                      </p>
                    </div>

                    <span className="hidden text-xs font-medium sm:block">
                      {amount}
                    </span>

                    <Badge
                      variant={
                        status === "Paid"
                          ? "success"
                          : status === "Overdue"
                            ? "error"
                            : "warning"
                      }
                    >
                      {status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductPreview;
