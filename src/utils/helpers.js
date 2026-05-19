export function formatTime(unix) {
  return new Date(unix * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function getWindDirection(deg) {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return dirs[Math.round(deg / 45) % 8];
}

export function celsiusToFahrenheit(c) {
  return Math.round((c * 9) / 5 + 32);
}

export function convertTemp(tempC, unit) {
  return unit === "C" ? Math.round(tempC) : celsiusToFahrenheit(tempC);
}

export function tempLabel(tempC, unit) {
  return `${convertTemp(tempC, unit)}°${unit}`;
}

export function getSunProgress(sunrise, sunset) {
  const now = Date.now() / 1000;
  if (now < sunrise) return 0;
  if (now > sunset) return 100;
  return Math.round(((now - sunrise) / (sunset - sunrise)) * 100);
}

export function getUVIndexLabel(uvi) {
  if (uvi <= 2) return { label: "Low", color: "text-green-300" };
  if (uvi <= 5) return { label: "Moderate", color: "text-yellow-300" };
  if (uvi <= 7) return { label: "High", color: "text-orange-300" };
  if (uvi <= 10) return { label: "Very High", color: "text-red-400" };
  return { label: "Extreme", color: "text-purple-400" };
}

export function formatDate(date = new Date()) {
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function formatClock(date = new Date()) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
