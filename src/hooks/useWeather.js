import { useState, useCallback } from "react";
import { API_KEY, BASE_URL } from "../utils/config";
import { MOCK_WEATHER, MOCK_FORECAST } from "../utils/constants";

export function useWeather() {
  const [weather, setWeather] = useState(MOCK_WEATHER);
  const [forecast, setForecast] = useState(MOCK_FORECAST);
  const [loading, setLoading] = useState(false);
  const [locLoading, setLocLoading] = useState(false);
  const [error, setError] = useState("");
  const [locationDenied, setLocationDenied] = useState(false);
  const [usingMock, setUsingMock] = useState(true);

  // ── Core fetch function ─────────────────────────────────────────────────
  const doFetch = useCallback(async (weatherUrl, forecastUrl, setLoadingFn) => {
    setError("");
    setLoadingFn(true);
    try {
      const wRes = await fetch(weatherUrl);
      const wData = await wRes.json();
      if (!wRes.ok) throw new Error(wData.message || `Server error ${wRes.status}`);

      const fRes = await fetch(forecastUrl);
      const fData = await fRes.json();
      if (!fRes.ok) throw new Error(fData.message || `Forecast error ${fRes.status}`);

      setWeather(wData);
      setForecast(fData);
      setUsingMock(false);
      setError("");
    } catch (e) {
      setError("❌ " + (e.message || "Kuch gadbad hui, dobara try karo."));
    } finally {
      setLoadingFn(false);
    }
  }, []);

  // ── Fetch by city name ──────────────────────────────────────────────────
  const fetchByCity = useCallback(async (cityName) => {
    if (!cityName.trim()) return;
    if (!API_KEY || API_KEY.trim() === "") {
      setError("❌ API Key nahi hai! src/utils/config.js mein daalo.");
      return;
    }
    const wUrl = `${BASE_URL}/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`;
    const fUrl = `${BASE_URL}/forecast?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric&cnt=40`;
    await doFetch(wUrl, fUrl, setLoading);
  }, [doFetch]);

  // ── Fetch by GPS coordinates ────────────────────────────────────────────
  const fetchByCoords = useCallback(async (lat, lon) => {
    if (!API_KEY || API_KEY.trim() === "") {
      setError("❌ API Key nahi hai! src/utils/config.js mein daalo.");
      setLocLoading(false);
      return;
    }
    const wUrl = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const fUrl = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&cnt=40`;
    await doFetch(wUrl, fUrl, setLocLoading);
  }, [doFetch]);

  // ── GPS detect ──────────────────────────────────────────────────────────
  const detectLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError("❌ Yeh browser Geolocation support nahi karta.");
      setLocationDenied(true);
      return;
    }
    setLocLoading(true);
    setError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocationDenied(false);
        fetchByCoords(pos.coords.latitude, pos.coords.longitude);
      },
      (err) => {
        setLocLoading(false);
        setLocationDenied(true);
        if (err.code === 1)
          setError("📍 Location permission deny hai. Browser settings mein Allow karo, ya city manually search karo.");
        else if (err.code === 2)
          setError("📍 Location available nahi hai. City manually search karo.");
        else if (err.code === 3)
          setError("📍 Location timeout. Dobara try karo.");
        else
          setError("📍 Location detect nahi hua. City search karo.");
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
    );
  }, [fetchByCoords]);

  return {
    weather, forecast, loading, locLoading, error,
    locationDenied, usingMock, fetchByCity, detectLocation,
  };
}
