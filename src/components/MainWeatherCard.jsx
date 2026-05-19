import React from "react";
import { formatTime, tempLabel, getSunProgress } from "../utils/helpers";

export default function MainWeatherCard({ weather, theme, unit }) {
  const sunPct = getSunProgress(weather.sys.sunrise, weather.sys.sunset);

  return (
    <div className="glass rounded-3xl p-6 flex flex-col gap-5 animate-slide-up">
      {/* City + condition */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-white text-2xl font-black text-shadow">
              {weather.name}
            </h2>
            <span
              className={`text-base font-bold ${theme.textMuted} uppercase tracking-widest`}
            >
              {weather.sys.country}
            </span>
          </div>
          <p
            className={`capitalize ${theme.textMuted} text-sm mt-1 font-medium`}
          >
            {weather.weather[0].description}
          </p>
        </div>
        <span className="text-6xl leading-none drop-shadow-lg select-none">
          {theme.icon}
        </span>
      </div>

      {/* Temperature */}
      <div className="flex items-end gap-4">
        <span className="text-white font-black leading-none tracking-tighter text-shadow"
          style={{ fontSize: "clamp(4rem, 18vw, 7rem)" }}>
          {unit === "C"
            ? Math.round(weather.main.temp)
            : Math.round(weather.main.temp * 9 / 5 + 32)}°
        </span>
        <div className={`${theme.textMuted} text-sm pb-3 flex flex-col gap-1 font-semibold`}>
          <span>↑ {tempLabel(weather.main.temp_max, unit)}</span>
          <span>↓ {tempLabel(weather.main.temp_min, unit)}</span>
          <span className="opacity-80">
            Feels {tempLabel(weather.main.feels_like, unit)}
          </span>
        </div>
      </div>

      {/* Sunrise / Sunset */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className={`text-xs ${theme.textMuted} font-semibold flex items-center gap-1`}>
            🌅 {formatTime(weather.sys.sunrise)}
          </span>
          <span className={`text-xs ${theme.textMuted} font-semibold flex items-center gap-1`}>
            🌇 {formatTime(weather.sys.sunset)}
          </span>
        </div>
        <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/70 rounded-full transition-all duration-1000"
            style={{ width: `${sunPct}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs"
            style={{ left: `${sunPct}%` }}
          >
            ☀
          </div>
        </div>
      </div>
    </div>
  );
}
