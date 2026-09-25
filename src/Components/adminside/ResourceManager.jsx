"use client";

import { useEffect, useState } from "react";
import api from "@/Components/lib/api";

export default function ResourceManager() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    brand: "",
    title: "",
    desc: "",
    href: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const fetchResources = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/admin/resources");
      const data = res.data?.data || res.data || [];
      setResources(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const resetForm = () => {
    setForm({ brand: "", title: "", desc: "", href: "" });
    setImage(null);
    setPreview(null);
    setEditingId(null);
    setErrors({});
  };

  const openAdd = () => {
    resetForm();
    setShowForm(true);
  };

  const openEdit = (resource) => {
    setForm({
      brand: resource.brand || "",
      title: resource.title || "",
      desc: resource.desc || "",
      href: resource.href || "",
    });
    setImage(null);
    setPreview(resource.image || null);
    setEditingId(resource.id);
    setErrors({});
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    resetForm();
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErrors({});

    const fd = new FormData();
    fd.append("brand", form.brand);
    fd.append("title", form.title);
    fd.append("desc", form.desc);
    fd.append("href", form.href);
    if (image) fd.append("image", image);

    try {
      const url = editingId ? `/api/admin/resources/${editingId}` : "/api/admin/resources";
      await api.post(url, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      closeForm();
      fetchResources();
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors || {});
      } else {
        console.error(err);
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this resource?")) return;
    try {
      await api.delete(`/api/admin/resources/${id}`);
      setResources((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-jetbrains-mono text-[10px] tracking-[0.2em] text-neutral-400 mb-1">
            RESOURCES
          </p>
          <h2 className="font-fraunces text-2xl font-bold text-[#171A21]">
            Manage Featured Sites
          </h2>
        </div>

        <button
          type="button"
          onClick={showForm ? closeForm : openAdd}
          className="inline-flex items-center gap-2 rounded-sm bg-[#171A21] text-white px-4 py-2.5 text-xs font-jetbrains-mono tracking-[0.1em] hover:bg-[#3B82F6] transition"
        >
          {showForm ? "CLOSE" : "+ ADD RESOURCE"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-[#D3CCC5] rounded-sm p-5 sm:p-6">
          <h3 className="font-fraunces text-xl font-bold text-[#171A21]">
            {editingId ? "Edit Resource" : "New Resource"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-jetbrains-mono tracking-[0.1em] text-neutral-500 mb-1.5">
                BRAND
              </label>
              <input
                name="brand"
                value={form.brand}
                onChange={handleChange}
                required
                placeholder="e.g. SHOPIFY"
                className="w-full border border-[#D3CCC5] rounded-sm px-3 py-2.5 text-sm text-[#171A21] outline-none focus:ring-2 focus:ring-[#3B82F6]/40"
              />
              {errors.brand && <p className="text-red-500 text-xs mt-1">{errors.brand[0]}</p>}
            </div>

            <div>
              <label className="block text-xs font-jetbrains-mono tracking-[0.1em] text-neutral-500 mb-1.5">
                TITLE
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="e.g. eCommerce Website Builder"
                className="w-full border border-[#D3CCC5] rounded-sm px-3 py-2.5 text-sm text-[#171A21] outline-none focus:ring-2 focus:ring-[#3B82F6]/40"
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title[0]}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-jetbrains-mono tracking-[0.1em] text-neutral-500 mb-1.5">
              DESCRIPTION
            </label>
            <textarea
              name="desc"
              value={form.desc}
              onChange={handleChange}
              required
              rows={2}
              className="w-full border border-[#D3CCC5] rounded-sm px-3 py-2.5 text-sm text-[#171A21] outline-none focus:ring-2 focus:ring-[#3B82F6]/40 resize-none"
            />
            {errors.desc && <p className="text-red-500 text-xs mt-1">{errors.desc[0]}</p>}
          </div>

          <div>
            <label className="block text-xs font-jetbrains-mono tracking-[0.1em] text-neutral-500 mb-1.5">
              WEBSITE URL
            </label>
            <input
              name="href"
              type="url"
              value={form.href}
              onChange={handleChange}
              required
              placeholder="https://example.com"
              className="w-full border border-[#D3CCC5] rounded-sm px-3 py-2.5 text-sm text-[#171A21] outline-none focus:ring-2 focus:ring-[#3B82F6]/40"
            />
            {errors.href && <p className="text-red-500 text-xs mt-1">{errors.href[0]}</p>}
          </div>

          <div>
            <label className="block text-xs font-jetbrains-mono tracking-[0.1em] text-neutral-500 mb-1.5">
              IMAGE
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/webp"
              onChange={handleImage}
              className="w-full text-sm text-[#171A21] file:mr-3 file:py-2 file:px-3 file:rounded-sm file:border-0 file:bg-[#171A21] file:text-white file:text-xs file:cursor-pointer"
            />
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image[0]}</p>}
            {preview && (
              <img src={preview} alt="preview" className="mt-3 w-40 h-28 object-cover rounded-sm border border-[#D3CCC5]" />
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-sm bg-[#3B82F6] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1a3fd9] transition disabled:opacity-50"
            >
              {saving ? "Saving..." : editingId ? "Update Resource" : "Publish Resource"}
            </button>
            <button
              type="button"
              onClick={closeForm}
              className="inline-flex items-center gap-2 rounded-sm border border-[#D3CCC5] text-[#171A21] px-5 py-2.5 text-sm font-semibold hover:bg-[#F2EEE8] transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="bg-white border border-[#D3CCC5] rounded-sm overflow-hidden">
        {loading ? (
          <p className="text-center text-neutral-400 text-sm py-10">Loading...</p>
        ) : resources.length === 0 ? (
          <p className="text-center text-neutral-400 text-sm py-10">No resources yet.</p>
        ) : (
          <div className="divide-y divide-[#D3CCC5]">
            {resources.map((r) => (
              <div key={r.id} className="flex items-center gap-4 p-4">
                <img
                  src={r.image}
                  alt={r.brand}
                  className="w-16 h-12 object-cover rounded-sm bg-[#F2EEE8] shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#171A21] truncate">{r.brand}</p>
                  <p className="text-xs text-neutral-400 mt-0.5 truncate">{r.title}</p>
                </div>
                <button
                  type="button"
                  onClick={() => openEdit(r)}
                  className="text-xs font-jetbrains-mono tracking-[0.1em] text-[#3B82F6] hover:underline shrink-0"
                >
                  EDIT
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(r.id)}
                  className="text-xs font-jetbrains-mono tracking-[0.1em] text-red-500 hover:underline shrink-0"
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}