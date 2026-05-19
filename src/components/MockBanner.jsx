import React from "react";

export default function MockBanner() {
  return (
    <div className="bg-yellow-500/20 border border-yellow-300/30 rounded-2xl px-4 py-3 text-yellow-100 text-sm font-medium animate-fade-in">
      <span className="font-bold">Demo Mode:</span> Real weather ke liye{" "}
      <code className="bg-black/20 px-1 rounded text-xs">
        src/utils/config.js
      </code>{" "}
      mein apni API key daalo.{" "}
      <a
        href="https://openweathermap.org/api"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white transition-colors"
      >
        Free key lein →
      </a>
    </div>
  );
}
