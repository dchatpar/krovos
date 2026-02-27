export const metadata = {
  title: "Status - Krovos",
  description: "Krovos system status and uptime information.",
};

const components = [
  { name: "API", status: "operational", uptime: "99.99%" },
  { name: "Dashboard", status: "operational", uptime: "99.98%" },
  { name: "Workflow Engine", status: "operational", uptime: "99.99%" },
  { name: "AI Agents", status: "operational", uptime: "99.97%" },
  { name: "Webhooks", status: "operational", uptime: "99.99%" },
  { name: "API (EU)", status: "operational", uptime: "99.98%" },
];

const incidents = [
  { date: "Feb 25, 2026", title: "Minor latency in EU region", status: "resolved", impact: "Low" },
  { date: "Feb 20, 2026", title: "Scheduled maintenance", status: "resolved", impact: "None" },
];

export default function StatusPage() {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            All systems operational
          </div>
          <h1 className="text-4xl font-bold text-slate-900">Krovos Status</h1>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">System Status</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {components.map((comp, index) => (
              <div key={index} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">{comp.name}</div>
                  <div className="text-sm text-slate-500">Uptime: {comp.uptime}</div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  {comp.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Recent Incidents</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {incidents.map((incident, index) => (
              <div key={index} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-900">{incident.title}</div>
                    <div className="text-sm text-slate-500">{incident.date}</div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                    {incident.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
