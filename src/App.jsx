import React, { useState, useEffect } from "react";
import { getTheme } from "./utils/constants";
import { useWeather } from "./hooks/useWeather";

import Particles from "./components/Particles";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ErrorBanner from "./components/ErrorBanner";
import MockBanner from "./components/MockBanner";
import MainWeatherCard from "./components/MainWeatherCard";
import StatsGrid from "./components/StatsGrid";
import ForecastSection from "./components/ForecastSection";

export default function App() {
  const [unit, setUnit] = useState("C");
  const [time, setTime] = useState(new Date());

  const {
    weather,
    forecast,
    loading,
    locLoading,
    error,
    locationDenied,
    usingMock,
    fetchByCity,
    detectLocation,
  } = useWeather();

  const theme = getTheme(weather.weather[0].main);

  // Live clock
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // Auto-detect on first load
  useEffect(() => {
    detectLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-br ${theme.gradient} relative overflow-x-hidden`}
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      <Particles theme={theme} />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8 flex flex-col gap-5">

        {/* Header */}
        <Header
          time={time}
          unit={unit}
          onUnitToggle={() => setUnit((u) => (u === "C" ? "F" : "C"))}
          theme={theme}
        />

        {/* Search */}
        <SearchBar
          onSearch={fetchByCity}
          onLocate={detectLocation}
          loading={loading}
          locLoading={locLoading}
          theme={theme}
        />

        {/* Locating spinner */}
        {locLoading && (
          <div className="glass rounded-2xl px-4 py-3 text-white/90 text-sm flex items-center gap-2">
            <span className="inline-block animate-spin text-base">⟳</span>
            Your location is being detected...
          </div>
        )}

        {/* Demo mode banner */}
        {usingMock && !locLoading && <MockBanner />}

        {/* Error banner */}
        <ErrorBanner
          error={error}
          locationDenied={locationDenied}
          onRetry={detectLocation}
        />

        {/* Main weather card */}
        <MainWeatherCard weather={weather} theme={theme} unit={unit} />

        {/* Stats */}
        <StatsGrid weather={weather} theme={theme} />

        {/* 5-day forecast */}
        <ForecastSection forecast={forecast} theme={theme} unit={unit} />

        {/* Footer */}
        <p className={`text-center text-xs ${theme.textMuted} opacity-50 font-medium pb-2`}>
          SkyCast · Powered by OpenWeatherMap · GPS + Search supported
        </p>
      </div>
    </div>
  );
}
