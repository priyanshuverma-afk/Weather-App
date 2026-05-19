import React from "react";
import { DAYS, getTheme } from "../utils/constants";
import { convertTemp } from "../utils/helpers";

function ForecastCard({ day, icon, tempC, desc, theme, isToday, unit }) {
  return (
    <div
      className={`glass rounded-2xl p-3 flex flex-col items-center gap-1.5 flex-shrink-0 w-[90px] transition-all
        ${isToday ? "ring-2 ring-white/40 scale-105" : "opacity-90 hover:opacity-100"}`}
    >
      <span
        className={`text-xs font-bold uppercase tracking-wide ${isToday ? "text-white" : theme.textMuted}`}
      >
        {isToday ? "Today" : day}
      </span>
      <span className="text-3xl leading-none select-none">{icon}</span>
      <span className="text-white font-black text-base">
        {convertTemp(tempC, unit)}°
      </span>
      <span
        className={`text-xs ${theme.textMuted} text-center leading-tight capitalize font-medium`}
      >
        {desc}
      </span>
    </div>
  );
}

export default function ForecastSection({ forecast, theme, unit }) {
  const days = forecast.list
    .filter((_, i) => i % 8 === 0)
    .slice(0, 5)
    .map((item, i) => {
      const d = new Date(item.dt_txt);
      const cond = item.weather[0].main;
      return {
        day: DAYS[d.getDay()],
        icon: getTheme(cond).icon,
        tempC: item.main.temp,
        desc: item.weather[0].description,
        isToday: i === 0,
      };
    });

  return (
    <div className="flex flex-col gap-3">
      <h3
        className={`text-xs font-bold ${theme.textMuted} uppercase tracking-widest px-1`}
      >
        5-Day Forecast
      </h3>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
        {days.map((d, i) => (
          <div key={i} className="snap-center">
            <ForecastCard {...d} theme={theme} unit={unit} />
          </div>
        ))}
      </div>
    </div>
  );
}
