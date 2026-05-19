import React, { useState } from "react";

export default function SearchBar({ onSearch, onLocate, loading, locLoading, theme }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search city... (e.g. Mumbai, Delhi)"
        className="flex-1 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-5 py-3 text-white placeholder-white/45 outline-none focus:ring-2 focus:ring-white/40 text-sm font-medium transition-all"
        autoComplete="off"
        spellCheck="false"
      />

      {/* GPS Button */}
      <button
        type="button"
        onClick={onLocate}
        disabled={locLoading}
        title="Use my current location"
        className="bg-white/20 hover:bg-white/30 active:scale-95 border border-white/30 text-white rounded-2xl px-4 py-3 text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[52px]"
      >
        {locLoading ? (
          <span
            className="inline-block animate-spin text-base"
            style={{ display: "inline-block" }}
          >
            ⟳
          </span>
        ) : (
          "📍"
        )}
      </button>

      {/* Search Button */}
      <button
        type="submit"
        disabled={loading || !input.trim()}
        className="bg-white/25 hover:bg-white/35 active:scale-95 border border-white/30 text-white rounded-2xl px-5 py-3 font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="inline-block animate-spin">⟳</span>
        ) : (
          "Search"
        )}
      </button>
    </form>
  );
}
