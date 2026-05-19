export const WEATHER_THEMES = {
  Clear: {
    gradient: "from-amber-400 via-orange-400 to-rose-500",
    icon: "☀️",
    particle: "✦",
    accent: "#f59e0b",
    textMuted: "text-amber-100",
    label: "Sunny",
  },
  Clouds: {
    gradient: "from-slate-400 via-slate-500 to-slate-700",
    icon: "☁️",
    particle: "·",
    accent: "#94a3b8",
    textMuted: "text-slate-200",
    label: "Cloudy",
  },
  Rain: {
    gradient: "from-blue-600 via-blue-700 to-indigo-900",
    icon: "🌧️",
    particle: "|",
    accent: "#60a5fa",
    textMuted: "text-blue-200",
    label: "Rainy",
  },
  Drizzle: {
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    icon: "🌦️",
    particle: "·",
    accent: "#67e8f9",
    textMuted: "text-cyan-100",
    label: "Drizzle",
  },
  Snow: {
    gradient: "from-sky-200 via-blue-300 to-indigo-400",
    icon: "❄️",
    particle: "❄",
    accent: "#bae6fd",
    textMuted: "text-sky-100",
    label: "Snowy",
  },
  Thunderstorm: {
    gradient: "from-gray-800 via-gray-900 to-slate-950",
    icon: "⛈️",
    particle: "⚡",
    accent: "#facc15",
    textMuted: "text-gray-300",
    label: "Stormy",
  },
  Mist: {
    gradient: "from-teal-400 via-cyan-500 to-teal-700",
    icon: "🌫️",
    particle: "~",
    accent: "#5eead4",
    textMuted: "text-teal-100",
    label: "Misty",
  },
  Haze: {
    gradient: "from-yellow-400 via-amber-500 to-orange-600",
    icon: "🌫️",
    particle: "~",
    accent: "#fbbf24",
    textMuted: "text-yellow-100",
    label: "Hazy",
  },
  Fog: {
    gradient: "from-gray-400 via-gray-500 to-gray-600",
    icon: "🌁",
    particle: "~",
    accent: "#9ca3af",
    textMuted: "text-gray-200",
    label: "Foggy",
  },
  Smoke: {
    gradient: "from-gray-600 via-gray-700 to-gray-800",
    icon: "💨",
    particle: "~",
    accent: "#6b7280",
    textMuted: "text-gray-300",
    label: "Smoky",
  },
};

export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

export const getTheme = (condition) =>
  WEATHER_THEMES[condition] || WEATHER_THEMES["Clear"];

export const MOCK_WEATHER = {
  name: "Your City",
  sys: { country: "--", sunrise: 1716000000, sunset: 1716048000 },
  weather: [{ main: "Clear", description: "Add your API key to get live weather" }],
  main: { temp: 28, feels_like: 30, humidity: 55, pressure: 1012, temp_min: 24, temp_max: 33 },
  wind: { speed: 3.5, deg: 180 },
  visibility: 10000,
  clouds: { all: 10 },
};

export const MOCK_FORECAST = {
  list: [
    { dt_txt: "2026-05-18 12:00:00", main: { temp: 28 }, weather: [{ main: "Clear", description: "sunny" }] },
    { dt_txt: "2026-05-19 12:00:00", main: { temp: 26 }, weather: [{ main: "Clouds", description: "partly cloudy" }] },
    { dt_txt: "2026-05-20 12:00:00", main: { temp: 23 }, weather: [{ main: "Rain", description: "light rain" }] },
    { dt_txt: "2026-05-21 12:00:00", main: { temp: 20 }, weather: [{ main: "Thunderstorm", description: "thunderstorm" }] },
    { dt_txt: "2026-05-22 12:00:00", main: { temp: 25 }, weather: [{ main: "Clear", description: "sunny" }] },
  ],
};
