# 🌤 SkyCast — Modern Weather App

A beautiful and responsive weather application built with React and Tailwind CSS featuring live weather updates, GPS-based location detection, dynamic themes, and a modern animated UI.

---

## 📸 Preview

<img width="100%" alt="SkyCast Preview" src="https://via.placeholder.com/1200x600.png?text=SkyCast+Weather+App" />

---

## 🚀 Live Demo

🔗 Add your deployed link here  
Example:

```bash
https://skycast-weather.vercel.app
```

---

## ✨ Features

### 🌍 Weather Features
- 📍 Automatic GPS location detection
- 🔍 Search weather by city name
- 🌡 Toggle between Celsius & Fahrenheit
- 📅 5-Day weather forecast
- 🌅 Sunrise & Sunset progress tracker
- ⏰ Live real-time clock

### 🎨 UI/UX Features
- Dynamic weather-based themes
- Smooth animations & ambient particles
- Fully responsive design
- Modern glassmorphism interface
- Weather-specific color palettes

### 📊 Weather Details
- Humidity
- Wind Speed
- Pressure
- Visibility
- Cloud Coverage
- Wind Gust

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Frontend Framework |
| Tailwind CSS | Styling |
| OpenWeatherMap API | Weather Data |
| Geolocation API | GPS Detection |
| JavaScript (ES6+) | Application Logic |

---

## 📂 Project Structure

```bash
skycast/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── ErrorBanner.jsx
│   │   ├── ForecastSection.jsx
│   │   ├── Header.jsx
│   │   ├── MainWeatherCard.jsx
│   │   ├── MockBanner.jsx
│   │   ├── Particles.jsx
│   │   ├── SearchBar.jsx
│   │   └── StatsGrid.jsx
│   │
│   ├── hooks/
│   │   └── useWeather.js
│   │
│   ├── utils/
│   │   ├── config.js
│   │   ├── constants.js
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── index.js
│
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## ⚡ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/Weather-App.git
cd Weather-App
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure API Key

Go to:

```bash
src/utils/config.js
```

Add your OpenWeatherMap API key:

```js
const API_KEY = "YOUR_API_KEY";
```

Get your free API key from:

🔗 https://openweathermap.org/api

---

## ▶ Run Development Server

```bash
npm start
```

App will run on:

```bash
http://localhost:3000
```

---

## 🌈 Dynamic Weather Themes

| Weather | Theme |
|---|---|
| ☀ Clear | Orange / Amber |
| ☁ Cloudy | Slate Grey |
| 🌧 Rain | Deep Blue |
| ⛈ Storm | Dark Grey + Yellow |
| ❄ Snow | Sky Blue |
| 🌫 Mist/Haze | Teal / Amber |

---

## ⚠️ Troubleshooting

### ❌ City Not Found
Use correct city names.

Example:

```bash
Mumbai
New Delhi
London
```

---

### 📍 GPS Not Working
Allow location permissions in your browser.

Chrome:
- Lock Icon → Site Settings → Location → Allow

---

### 🔑 API Key Not Working
New API keys may take 10–15 minutes to activate.

---

### 🌐 502 Bad Gateway
OpenWeatherMap servers may be temporarily busy.

---

## 🚀 Future Improvements

- 🌙 Dark / Light mode toggle
- 📱 PWA support
- 🌍 Multi-language support
- 📊 Hourly weather forecast
- 🔔 Weather alerts

---

## 👨‍💻 Author

### Priyanshu Verma

- GitHub: :contentReference[oaicite:0]{index=0}

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

## 📜 License

This project is licensed under the MIT License.
