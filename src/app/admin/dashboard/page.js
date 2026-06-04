"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import api from "@/Components/lib/api";
import DashboardOverview from "@/Components/adminside/DashboardOverview";
import ContactsSection from "@/Components/adminside/ContactsSection";

export default function AdminDashboard() {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({ total: 0, unread: 0, read: 0 });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [adminName, setAdminName] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");

  const getHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
  });

  const fetchContacts = useCallback(async (p = 1) => {
    try {
      const { data } = await api.get(`/api/admin/contacts?page=${p}`, {
        headers: getHeaders(),
      });
      setContacts(data.data);
      setLastPage(data.last_page);
    } catch {
      router.push("/admin/login");
    }
  }, [router]);

  const fetchStats = useCallback(async () => {
    try {
      const { data } = await api.get("/api/admin/contacts/stats", {
        headers: getHeaders(),
      });
      setStats(data);
    } catch {}
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) { router.push("/admin/login"); return; }
    setAdminName(localStorage.getItem("admin_name") || "Admin");
    Promise.all([fetchContacts(1), fetchStats()]).finally(() => setLoading(false));
  }, [fetchContacts, fetchStats, router]);

  const markRead = async (id) => {
    try {
      await api.patch(`/api/admin/contacts/${id}/read`, {}, { headers: getHeaders() });
      setContacts((prev) => prev.map((c) => c.id === id ? { ...c, status: "read" } : c));
      setStats((prev) => ({ ...prev, unread: Math.max(0, prev.unread - 1), read: prev.read + 1 }));
    } catch {}
  };

  const deleteContact = async (id) => {
    if (!confirm("Delete this contact?")) return;
    try {
      await api.delete(`/api/admin/contacts/${id}`, { headers: getHeaders() });
      setContacts((prev) => prev.filter((c) => c.id !== id));
      setStats((prev) => ({ ...prev, total: prev.total - 1 }));
    } catch {}
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchContacts(newPage);
  };

  const logout = async () => {
    try {
      await api.post("/api/admin/logout", {}, { headers: getHeaders() });
    } finally {
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_name");
      router.push("/admin/login");
    }
  };

  const sharedProps = {
    contacts,
    page,
    lastPage,
    onPageChange: handlePageChange,
    onMarkRead: markRead,
    onDelete: deleteContact,
  };

  const renderTab = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <DashboardOverview
            stats={stats}
            onViewContacts={() => setActiveTab("contacts")}
            {...sharedProps}
          />
        );
      case "contacts":
        return <ContactsSection {...sharedProps} />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F6F2] flex items-center justify-center">
        <p className="font-jetbrains-mono text-[10px] tracking-[0.2em] text-neutral-400 animate-pulse">
          LOADING...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F2] flex flex-col font-inter">

      {/* ── Header ── */}
      <header className="border-b-2 border-[#171A21] px-4 sm:px-6 py-3 flex items-center justify-between bg-white sticky top-0 z-30">
        <span className="font-fraunces text-xl font-bold text-[#171A21]">
          Convertics<span className="text-[#3B82F6]">.</span>
          <span className="font-jetbrains-mono font-normal text-[10px] text-neutral-400 tracking-[0.15em] ml-3 hidden sm:inline">
            ADMIN
          </span>
        </span>
        <div className="flex items-center gap-3">
          <span className="font-jetbrains-mono text-[10px] tracking-[0.15em] text-neutral-400 hidden md:block">
            {adminName}
          </span>
          <button
            onClick={logout}
            className="border border-[#D3CCC5] text-[#171A21] px-3 sm:px-4 py-1.5 rounded-sm text-xs hover:bg-neutral-100 transition-colors"
          >
            Sign out
          </button>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar — desktop only */}
        <aside className="w-48 bg-white border-r border-[#D3CCC5] p-4 hidden md:flex flex-col gap-1 shrink-0">
          <p className="font-jetbrains-mono text-[9px] tracking-[0.2em] text-neutral-300 px-2 mb-2">
            NAVIGATION
          </p>
          {[
            { key: "dashboard", icon: "▦", label: "Dashboard" },
            { key: "contacts",  icon: "✉", label: "Contacts", badge: stats.unread },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`flex items-center gap-2 px-3 py-2 rounded-sm text-sm w-full text-left transition-colors ${
                activeTab === item.key
                  ? "bg-[#171A21] text-[#F8F6F2]"
                  : "text-neutral-500 hover:bg-neutral-50"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
              {item.badge > 0 && (
                <span className="ml-auto bg-blue-500 text-white text-[9px] font-jetbrains-mono px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </aside>

        {/* ── Main ── */}
        <main className="flex-1 flex flex-col overflow-hidden">

          {/* Mobile Tab Bar — sticks right under header */}
          <div className="md:hidden flex border-b-2 border-[#D3CCC5] bg-white shrink-0">
            {[
              { key: "dashboard", label: "OVERVIEW" },
              { key: "contacts",  label: "CONTACTS", badge: stats.unread },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`flex-1 py-3 font-jetbrains-mono text-[10px] tracking-[0.15em] transition-colors flex items-center justify-center gap-1.5 ${
                  activeTab === item.key
                    ? "border-b-2 border-[#171A21] text-[#171A21] -mb-[2px]"
                    : "text-neutral-400"
                }`}
              >
                {item.label}
                {item.badge > 0 && (
                  <span className="bg-blue-500 text-white text-[9px] font-jetbrains-mono px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {renderTab()}
          </div>

        </main>
      </div>
    </div>
  );
}