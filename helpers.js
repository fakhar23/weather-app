const getWeatherJSON = async function (city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18cd285e6712511aadb57f60afabbbfa&units=metric`
  );
  const data = await response.json();
  return data;
};

const getSunRiseJson = async function (lat, long) {
  const response = await fetch(
    `  https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long} `
  );
  const data = await response.json();
  return data;
};
