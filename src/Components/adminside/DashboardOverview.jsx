import ContactsSection from "@/Components/adminside/ContactsSection";

export default function DashboardOverview({
  stats,
  onViewContacts,
  contacts,
  page,
  lastPage,
  onPageChange,
  onMarkRead,
  onDelete,
}) {
  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <p className="font-jetbrains-mono text-[10px] tracking-[0.2em] text-neutral-400 mb-1">
          OVERVIEW
        </p>
        <h2 className="font-fraunces text-2xl font-bold text-[#171A21]">
          Dashboard
        </h2>
      </div>

      {/* Stats Cards — 1 col mobile, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { label: "TOTAL SUBMISSIONS", value: stats.total, sub: "All time", blue: false },
          { label: "UNREAD", value: stats.unread, sub: "Needs attention", blue: true },
          { label: "READ", value: stats.read, sub: "Reviewed", blue: false },
        ].map((s) => (
          <div
            key={s.label}
            className={`bg-white border border-[#D3CCC5] rounded-sm p-4 sm:p-5 flex sm:block items-center justify-between ${
              s.blue ? "border-l-4 border-l-[#3B82F6] sm:border-l-[#D3CCC5] sm:border-t-2 sm:border-t-[#3B82F6]" : ""
            }`}
          >
            <div>
              <p className="font-jetbrains-mono text-[9px] tracking-[0.15em] text-neutral-400 mb-1 sm:mb-2">
                {s.label}
              </p>
              <p className={`font-fraunces text-3xl font-bold leading-none ${
                s.blue ? "text-[#3B82F6]" : "text-[#171A21]"
              }`}>
                {s.value}
              </p>
            </div>
            <p className="text-xs text-neutral-400 sm:mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Contacts Section */}
      <ContactsSection
        contacts={contacts}
        page={page}
        lastPage={lastPage}
        onPageChange={onPageChange}
        onMarkRead={onMarkRead}
        onDelete={onDelete}
        title="Recent contacts"
      />
    </div>
  );
}