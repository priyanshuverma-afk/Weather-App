# 🌤 SkyCast Weather App

Ek beautiful weather app — React + Tailwind CSS ke saath, GPS support ke saath!

---

## 🚀 Setup Karo (5 Minutes)

### Step 1 — Dependencies Install Karo

```bash
cd skycast
npm install
npm install tailwindcss postcss autoprefixer
```

### Step 2 — API Key Daalo

`src/utils/config.js` file kholo aur apni key daalo:

```js
const API_KEY = "YAHAN_APNI_KEY_DAALO";
```

**Free API Key kaise milegi?**
1. Jao: https://openweathermap.org/api
2. Free account banao
3. Dashboard mein "My API Keys" mein jaake key copy karo
4. Key active hone mein 10-15 minute lagte hain

### Step 3 — App Chalao

```bash
npm start
```

Browser mein khulega: `http://localhost:3000`

---

## 📁 Project Structure

```
skycast/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── ErrorBanner.jsx     # Error messages
│   │   ├── ForecastSection.jsx # 5-day forecast cards
│   │   ├── Header.jsx          # App header + clock
│   │   ├── MainWeatherCard.jsx # Main weather display
│   │   ├── MockBanner.jsx      # Demo mode warning
│   │   ├── Particles.jsx       # Ambient particles
│   │   ├── SearchBar.jsx       # City search + GPS button
│   │   └── StatsGrid.jsx       # Humidity, wind, etc.
│   ├── hooks/
│   │   └── useWeather.js       # All API logic (city + GPS)
│   ├── utils/
│   │   ├── config.js           # ← API KEY YAHAN DAALO
│   │   ├── constants.js        # Weather themes & mock data
│   │   └── helpers.js          # Utility functions
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Tailwind + custom CSS
│   └── index.js                # React entry point
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## ✨ Features

- 📍 **GPS Auto-Detect** — App open hote hi location detect karta hai
- 🔍 **City Search** — Koi bhi city search karo
- 🌡 **°C / °F Toggle** — Temperature unit badlo
- 🎨 **Dynamic Themes** — Weather ke hisaab se colors badalta hai
  - ☀️ Clear → Orange/Amber
  - ☁️ Cloudy → Slate grey
  - 🌧️ Rain → Deep blue
  - ⛈️ Storm → Dark grey + yellow
  - ❄️ Snow → Sky blue
  - 🌫️ Mist/Haze → Teal/Amber
- ✦ **Ambient Particles** — Weather-themed floating particles
- 🌅 **Sunrise/Sunset Bar** — Live solar progress
- 📊 **6 Stats** — Humidity, Wind, Pressure, Visibility, Cloud Cover, Gust
- 📅 **5-Day Forecast** — Scrollable forecast cards
- ⏰ **Live Clock** — Real-time updates

---

## 🛠 Tech Stack

| Technology | Use |
|---|---|
| React 18 | UI Framework |
| Tailwind CSS | Styling |
| OpenWeatherMap API | Weather Data |
| Browser Geolocation API | GPS Detection |

---

## ⚠️ Troubleshooting

**"City not found"** → Sahi city name likho (e.g. "Mumbai" not "bombay")

**GPS kaam nahi kar raha** → Browser mein location permission do. Chrome mein: address bar pe lock icon → Site Settings → Location → Allow

**API key kaam nahi kar rahi** → Naye account mein key active hone mein 10-15 min lagte hain. Wait karo phir try karo.

**"502 Bad Gateway"** → OpenWeatherMap ka server busy hai, thodi der baad try karo.

---

Made with ❤️ using React + Tailwind CSS
