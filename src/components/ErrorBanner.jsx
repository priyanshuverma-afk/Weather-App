import React from "react";

export default function ErrorBanner({ error, locationDenied, onRetry }) {
  if (!error) return null;
  return (
    <div className="bg-black/20 border border-white/20 rounded-2xl px-4 py-3 text-white/90 text-sm flex items-center gap-2 animate-fade-in">
      <span className="text-base">⚠</span>
      <span className="flex-1">{error}</span>
      {locationDenied && (
        <button
          onClick={onRetry}
          className="text-xs underline opacity-80 hover:opacity-100 whitespace-nowrap"
        >
          Retry GPS
        </button>
      )}
    </div>
  );
}
