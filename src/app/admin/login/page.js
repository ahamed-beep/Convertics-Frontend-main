"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/Components/lib/api";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await api.post("/api/admin/login", form);
      if (data.success) {
        localStorage.setItem("admin_token", data.token);
        localStorage.setItem("admin_name", data.admin);
        router.push("/admin/dashboard");
      }
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] flex flex-col">
      {/* Top Bar */}
      <div className="border-b border-[#D3CCC5] px-6 py-2 flex justify-between items-center">
        <span className="font-jetbrains-mono text-[10px] tracking-[0.2em] text-neutral-500">VOL. 04 · ISSUE 26</span>
        <span className="font-jetbrains-mono text-[10px] tracking-[0.2em] text-neutral-500">EST. 2022</span>
      </div>

      {/* Header */}
      <div className="border-b-2 border-[#171A21] px-6 py-3 flex items-center justify-between bg-white">
       <Link href='/' >
       <span className="font-fraunces text-2xl font-bold text-[#171A21] tracking-tight">
          Convertics<span className="text-[#3B82F6]">.</span>
        </span>
       </Link> 
        <span className="font-jetbrains-mono text-[10px] tracking-[0.2em] text-neutral-400">ADMIN PORTAL</span>
      </div>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <p className="font-jetbrains-mono text-[10px] tracking-[0.2em] text-neutral-400 mb-2">SECURE ACCESS</p>
            <h1 className="font-fraunces text-4xl font-bold text-[#171A21] tracking-tight leading-tight">
              Admin<br />
              <span className="font-light italic">Sign in.</span>
            </h1>
          </div>

          <div className="bg-white border border-[#D3CCC5] rounded-sm p-8">
            {error && (
              <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-sm text-red-600 text-sm font-inter">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-jetbrains-mono text-[10px] tracking-[0.15em] text-neutral-400 block mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 border border-[#D3CCC5] rounded-sm bg-[#F8F6F2] text-[#171A21] text-sm font-inter focus:outline-none focus:border-[#171A21]"
                />
              </div>

              <div>
                <label className="font-jetbrains-mono text-[10px] tracking-[0.15em] text-neutral-400 block mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 border border-[#D3CCC5] rounded-sm bg-[#F8F6F2] text-[#171A21] text-sm font-inter focus:outline-none focus:border-[#171A21]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#171A21] hover:bg-black text-[#F8F6F2] py-3 rounded-sm text-sm font-inter flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
              >
                {loading ? "Signing in..." : <>Sign in <span>→</span></>}
              </button>
            </form>

            <div className="mt-5 pt-5 border-t border-[#D3CCC5] text-center">
              <span className="font-jetbrains-mono text-[10px] tracking-[0.1em] text-neutral-300">
                PROTECTED · CONVERTICS JOURNAL 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}