import React from "react";
import { getWindDirection } from "../utils/helpers";

function StatCard({ icon, label, value, sub, theme }) {
  return (
    <div className="glass rounded-2xl p-4 flex flex-col gap-1 animate-fade-in">
      <span className={`text-xs ${theme.textMuted} font-semibold uppercase tracking-wider flex items-center gap-1`}>
        <span>{icon}</span> {label}
      </span>
      <span className="text-white text-xl font-black">{value}</span>
      {sub && (
        <span className={`text-xs ${theme.textMuted} opacity-75 font-medium`}>{sub}</span>
      )}
    </div>
  );
}

export default function StatsGrid({ weather, theme }) {
  const windDir = getWindDirection(weather.wind.deg);
  const visKm = (weather.visibility / 1000).toFixed(1);
  const cloudiness = weather.clouds?.all ?? 0;

  const stats = [
    {
      icon: "💧",
      label: "Humidity",
      value: `${weather.main.humidity}%`,
      sub: weather.main.humidity > 70 ? "High" : weather.main.humidity > 40 ? "Moderate" : "Low",
    },
    {
      icon: "💨",
      label: "Wind",
      value: `${weather.wind.speed} m/s`,
      sub: `Direction: ${windDir}`,
    },
    {
      icon: "🌡",
      label: "Pressure",
      value: `${weather.main.pressure}`,
      sub: "hPa",
    },
    {
      icon: "👁",
      label: "Visibility",
      value: `${visKm} km`,
      sub: visKm >= 10 ? "Clear" : visKm >= 5 ? "Moderate" : "Poor",
    },
    {
      icon: "☁",
      label: "Cloud Cover",
      value: `${cloudiness}%`,
      sub: cloudiness < 20 ? "Clear sky" : cloudiness < 60 ? "Partly cloudy" : "Overcast",
    },
    {
      icon: "🌬",
      label: "Wind Gust",
      value: weather.wind.gust ? `${weather.wind.gust} m/s` : "N/A",
      sub: "Max gust speed",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {stats.map((s, i) => (
        <StatCard key={i} {...s} theme={theme} />
      ))}
    </div>
  );
}
