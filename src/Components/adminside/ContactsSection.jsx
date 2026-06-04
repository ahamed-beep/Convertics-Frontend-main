"use client";
import { useState } from "react";

export default function ContactsSection({
  contacts,
  page,
  lastPage,
  onPageChange,
  onMarkRead,
  onDelete,
  title = "All submissions",
}) {
  const [selected, setSelected] = useState(null);

  const handleRowClick = async (contact) => {
    setSelected(contact);
    if (contact.status === "unread") {
      await onMarkRead(contact.id);
    }
  };

  const handleMarkRead = async (id) => {
    await onMarkRead(id);
    if (selected?.id === id) {
      setSelected((prev) => ({ ...prev, status: "read" }));
    }
  };

  const handleDelete = async (id) => {
    await onDelete(id);
    if (selected?.id === id) setSelected(null);
  };

  return (
    <div className="space-y-4">
      {/* Title — only shown on Contacts tab, not on Dashboard */}
      {title === "All submissions" && (
        <div>
          <p className="font-jetbrains-mono text-[10px] tracking-[0.2em] text-neutral-400 mb-1">
            INBOX
          </p>
          <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#171A21]">
            Contacts
          </h2>
        </div>
      )}

 <div className="flex flex-col xl:flex-row gap-4 items-start">
        {/* Table */}
        <div className={`bg-white border border-[#D3CCC5] rounded-sm w-full ${
          selected ? "lg:flex-1 lg:min-w-0" : "w-full"
        }`}>
          {/* Table Header */}
          <div className="px-5 py-4 border-b border-[#D3CCC5] flex justify-between items-center">
            <div>
              <p className="font-jetbrains-mono text-[9px] tracking-[0.15em] text-neutral-400 mb-0.5">
                INBOX
              </p>
              <p className="text-sm font-medium text-[#171A21]">{title}</p>
            </div>
            {contacts.filter((c) => c.status === "unread").length > 0 && (
              <span className="font-jetbrains-mono text-[9px] tracking-[0.1em] bg-blue-50 text-blue-600 px-2 py-1 rounded-sm">
                {contacts.filter((c) => c.status === "unread").length} UNREAD
              </span>
            )}
          </div>

          {/* Mobile Cards */}
          <div className="sm:hidden divide-y divide-[#f3f3f0]">
            {contacts.length === 0 ? (
              <p className="px-5 py-10 text-center font-jetbrains-mono text-[10px] tracking-widest text-neutral-300">
                NO CONTACTS YET
              </p>
            ) : (
              contacts.map((c) => (
                <div
                  key={c.id}
                  onClick={() => handleRowClick(c)}
                  className={`p-4 cursor-pointer transition-colors ${
                    selected?.id === c.id ? "bg-[#F0F4FF]" : "hover:bg-[#fafaf8]"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      {c.status === "unread" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      )}
                      <p className="text-sm font-medium text-[#171A21]">{c.name}</p>
                    </div>
                    <span className={`font-jetbrains-mono text-[9px] px-2 py-1 rounded-sm shrink-0 ${
                      c.status === "unread"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-neutral-100 text-neutral-400"
                    }`}>
                      {c.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mb-1">{c.email}</p>
                  <p className="text-xs text-neutral-400 truncate mb-3">{c.message}</p>
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => handleMarkRead(c.id)}
                      disabled={c.status === "read"}
                      className="border border-[#D3CCC5] text-[#171A21] px-3 py-1.5 rounded-sm text-xs hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      ✓ Read
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="border border-red-200 text-red-500 px-3 py-1.5 rounded-sm text-xs hover:bg-red-50 transition-colors"
                    >
                      ✕ Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Desktop Table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#D3CCC5]">
                  {(selected
                    ? ["NAME", "STATUS", "DATE", "ACTIONS"]
                    : ["NAME", "EMAIL", "MESSAGE", "STATUS", "DATE", "ACTIONS"]
                  ).map((h) => (
                    <th
                      key={h}
                      className="font-jetbrains-mono text-[9px] tracking-[0.15em] text-neutral-400 font-normal text-left px-5 py-3"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {contacts.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-10 text-center text-neutral-300 font-jetbrains-mono text-[10px] tracking-widest"
                    >
                      NO CONTACTS YET
                    </td>
                  </tr>
                ) : (
                  contacts.map((c) => (
                    <tr
                      key={c.id}
                      onClick={() => handleRowClick(c)}
                      className={`border-b border-[#f3f3f0] cursor-pointer transition-colors ${
                        selected?.id === c.id
                          ? "bg-[#F0F4FF] border-l-2 border-l-[#3B82F6]"
                          : "hover:bg-[#fafaf8]"
                      }`}
                    >
                      <td className="px-5 py-3 font-medium text-[#171A21] whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {c.status === "unread" && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          )}
                          {c.name}
                        </div>
                      </td>
                      {!selected && (
                        <>
                          <td className="px-5 py-3 text-neutral-500 text-xs">{c.email}</td>
                          <td className="px-5 py-3 text-neutral-400 text-xs max-w-[180px] truncate">
                            {c.message}
                          </td>
                        </>
                      )}
                      <td className="px-5 py-3">
                        <span className={`font-jetbrains-mono text-[9px] px-2 py-1 rounded-sm ${
                          c.status === "unread"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-neutral-100 text-neutral-400"
                        }`}>
                          {c.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-5 py-3 font-jetbrains-mono text-[10px] text-neutral-400 whitespace-nowrap">
                        {new Date(c.created_at).toLocaleDateString("en-GB", {
                          day: "2-digit", month: "short", year: "numeric",
                        }).toUpperCase()}
                      </td>
                      <td className="px-5 py-3" onClick={(e) => e.stopPropagation()}>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleMarkRead(c.id)}
                            disabled={c.status === "read"}
                            className="border border-[#D3CCC5] text-[#171A21] px-2 py-1 rounded-sm text-xs hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          >
                            ✓
                          </button>
                          <button
                            onClick={() => handleDelete(c.id)}
                            className="border border-red-200 text-red-500 px-2 py-1 rounded-sm text-xs hover:bg-red-50 transition-colors"
                          >
                            ✕
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-5 py-3 border-t border-[#D3CCC5] flex justify-between items-center">
            <span className="font-jetbrains-mono text-[10px] tracking-[0.1em] text-neutral-300">
              PAGE {page} OF {lastPage}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                className="border border-[#D3CCC5] px-3 py-1 rounded-sm text-xs disabled:opacity-30 hover:bg-neutral-50 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => onPageChange(page + 1)}
                disabled={page === lastPage}
                className="bg-[#171A21] text-white border border-[#171A21] px-3 py-1 rounded-sm text-xs disabled:opacity-30 hover:bg-black transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        {selected && (
          <div className="w-full lg:w-80 lg:shrink-0 bg-white border border-[#D3CCC5] rounded-sm">
            <div className="px-5 py-4 border-b border-[#D3CCC5] flex justify-between items-start">
              <div>
                <p className="font-jetbrains-mono text-[9px] tracking-[0.15em] text-neutral-400 mb-0.5">
                  SUBMISSION DETAIL
                </p>
                <p className="text-sm font-medium text-[#171A21]">{selected.name}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-neutral-300 hover:text-neutral-500 text-lg leading-none mt-0.5 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-5 space-y-5">
              {/* Status + ID */}
              <div className="flex items-center justify-between">
                <span className={`font-jetbrains-mono text-[10px] px-2 py-1 rounded-sm ${
                  selected.status === "unread"
                    ? "bg-blue-50 text-blue-700"
                    : "bg-neutral-100 text-neutral-400"
                }`}>
                  {selected.status.toUpperCase()}
                </span>
                <span className="font-jetbrains-mono text-[10px] text-neutral-300">
                  #{String(selected.id).padStart(4, "0")}
                </span>
              </div>

              {/* Name */}
              <div>
                <p className="font-jetbrains-mono text-[9px] tracking-[0.15em] text-neutral-300 mb-1">NAME</p>
                <p className="text-sm text-[#171A21] font-medium">{selected.name}</p>
              </div>

              {/* Email */}
              <div>
                <p className="font-jetbrains-mono text-[9px] tracking-[0.15em] text-neutral-300 mb-1">EMAIL</p>
                <a
                  href={`mailto:${selected.email}`}
                  className="text-sm text-[#3B82F6] hover:underline break-all"
                >
                  {selected.email}
                </a>
              </div>

              {/* Date */}
              <div>
                <p className="font-jetbrains-mono text-[9px] tracking-[0.15em] text-neutral-300 mb-1">RECEIVED</p>
                <p className="text-sm text-[#171A21]">
                  {new Date(selected.created_at).toLocaleDateString("en-GB", {
                    day: "2-digit", month: "long", year: "numeric",
                  })}
                </p>
                <p className="font-jetbrains-mono text-[10px] text-neutral-400 mt-0.5">
                  {new Date(selected.created_at).toLocaleTimeString("en-GB", {
                    hour: "2-digit", minute: "2-digit",
                  })}
                </p>
              </div>

              {/* Message */}
              <div>
                <p className="font-jetbrains-mono text-[9px] tracking-[0.15em] text-neutral-300 mb-2">MESSAGE</p>
                <div className="bg-[#F8F6F2] border border-[#E8E3DD] rounded-sm p-3">
                  <p className="text-sm text-[#171A21] leading-relaxed whitespace-pre-wrap">
                    {selected.message}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E8E3DD]" />

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${selected.email}?subject=Re: Your message to Convertics`}
                  className="w-full bg-[#171A21] hover:bg-black text-[#F8F6F2] py-2.5 rounded-sm text-xs font-inter flex items-center justify-center gap-2 transition-colors"
                >
                  ✉ Reply via Email
                </a>
                <button
                  onClick={() => handleMarkRead(selected.id)}
                  disabled={selected.status === "read"}
                  className="w-full border border-[#D3CCC5] text-[#171A21] py-2.5 rounded-sm text-xs font-inter hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ✓ Mark as Read
                </button>
                <button
                  onClick={() => handleDelete(selected.id)}
                  className="w-full border border-red-200 text-red-500 py-2.5 rounded-sm text-xs font-inter hover:bg-red-50 transition-colors"
                >
                  ✕ Delete Submission
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}