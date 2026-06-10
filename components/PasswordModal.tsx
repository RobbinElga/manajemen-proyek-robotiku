"use client";

import { useState } from "react";

export default function PasswordModal({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: (password: string) => boolean;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = onConfirm(password);
    if (!ok) {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xs rounded-2xl border border-white/10 bg-[#141414] p-5 shadow-xl"
      >
        <h3 className="text-sm font-semibold text-white">Masukkan sandi</h3>
        <p className="mt-1 text-xs text-white/50">
          Sandi diperlukan untuk mengubah status progres.
        </p>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          className="mt-3 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-white/30"
          placeholder="Sandi"
        />
        {error && <p className="mt-2 text-xs text-red-400">Sandi salah.</p>}
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3.5 py-1.5 text-xs font-medium text-white/60 hover:text-white"
          >
            Batal
          </button>
          <button
            type="submit"
            className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-[#0a0a0a]"
          >
            Konfirmasi
          </button>
        </div>
      </form>
    </div>
  );
}
