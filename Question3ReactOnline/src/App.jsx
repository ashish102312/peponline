import { useState } from 'react';

const cityWeatherData = {
  'Himachal Pradesh': {
    temp: 20,
    humidity: 60,
    condition: 'Cloudy',
    icon: '☁️'
  },
  'Kargil': {
    temp: 8,
    humidity: 80,
    condition: 'Rainy',
    icon: '🌧️'
  },
  'Chandigarh': {
    temp: 40,
    humidity: 20,
    condition: 'Sunny',
    icon: '☀️'
  },
  'Assam': {
    temp: 22,
    humidity: 55,
    condition: 'Clear',
    icon: '🌤️'
  },
  'Mumbai': {
    temp: 32,
    humidity: 75,
    condition: 'Humid',
    icon: '🌥️'
  },
  'Kolkata': {
    temp: 2,
    humidity: 90,
    condition: 'Snowy',
    icon: '❄️'
  }
};

function App() {
  const [selectedCity, setSelectedCity] = useState('Himachal Pradesh');

  const weather = cityWeatherData[selectedCity];

  // Logic for dynamic background color
  let bgColor = 'bg-gray-100'; // Default gray
  if (weather.temp > 30) {
    bgColor = 'bg-red-500'; // Red for hot
  } else if (weather.temp < 10) {
    bgColor = 'bg-blue-500'; // Blue for cold
  } else {
    bgColor = 'bg-yellow-400'; // Yellow/Orange for moderate
  }

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 font-sans ${bgColor}`}>
      <div className="bg-white/90 p-8 rounded-3xl shadow-2xl w-full max-w-md text-center text-gray-800">
        <h1 className="mt-0 text-xl font-semibold text-gray-600 mb-6">Weather Dashboard</h1>

        <div className="mb-8">
          <label htmlFor="city-select" className="text-gray-700 mr-2">Choose a city: </label>
          <select
            id="city-select"
            value={selectedCity}
            onChange={handleCityChange}
            className="px-4 py-2 text-base rounded-lg border border-gray-300 cursor-pointer outline-none focus:border-gray-500 transition-colors"
          >
            {Object.keys(cityWeatherData).map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          <div className="text-7xl mb-4">{weather.icon}</div>
          <h2 className="text-4xl font-bold my-2">{selectedCity}</h2>
          <p className="text-xl text-gray-500 mb-8">{weather.condition}</p>

          <div className="flex justify-around mt-4 pt-6 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Temperature</span>
              <span className="text-2xl font-bold text-gray-900">{weather.temp}°C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Humidity</span>
              <span className="text-2xl font-bold text-gray-900">{weather.humidity}%</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Background is <span className="font-bold">{weather.temp > 30 ? 'Red' : weather.temp < 10 ? 'Blue' : 'Yellow'}</span> because it is {weather.temp}°C.
        </p>
      </div>
    </div>
  );
}

export default App;
