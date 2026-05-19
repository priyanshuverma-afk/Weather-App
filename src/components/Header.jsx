import React from "react";
import { formatDate, formatClock } from "../utils/helpers";

export default function Header({ time, unit, onUnitToggle, theme }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-white text-3xl font-black tracking-tight text-shadow flex items-center gap-2">
          <span>🌤</span> SkyCast
        </h1>
        <p className={`text-sm ${theme.textMuted} font-semibold mt-0.5`}>
          {formatDate(time)}&nbsp;·&nbsp;{formatClock(time)}
        </p>
      </div>

      <button
        onClick={onUnitToggle}
        title={`Switch to °${unit === "C" ? "F" : "C"}`}
        className="bg-white/20 hover:bg-white/30 active:scale-95 text-white font-black rounded-full px-4 py-2 text-sm border border-white/30 transition-all"
      >
        °{unit === "C" ? "F" : "C"}
      </button>
    </div>
  );
}
