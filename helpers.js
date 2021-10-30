const getWeatherJSON = async function (city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18cd285e6712511aadb57f60afabbbfa&units=metric`
  );
  const data = await response.json();
  return data;
};

// const getSunRiseJson = async function (lat, long) {
//   const response = await fetch(
//     `  https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long} `
//   );
//   const data = await response.json();
//   return data;
// };

function getOverSeasTime(date) {
  let dateSubTimezone = subtractSeconds(date, weatherData.timezone);
  // console.log("sunriseDate22: ", sunriseDate22);
  dateSubTimezoneFormatted = intlDateObj.format(dateSubTimezone);
  // console.log("sunriseDate2: ", sunriseDate2);
  return dateSubTimezoneFormatted;
}

let intlDateObj = new Intl.DateTimeFormat("en-US", {
  timeZone: "GMT",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

function subtractSeconds(date, seconds) {
  date.setSeconds(date.getSeconds() + seconds);
  return date;
}

function DisplayHoursAgo(milliSeconds) {
  let seconds, minutes, hours, sign;
  if (milliSeconds < 0) {
    sign = -1;
    milliSeconds = -1 * milliSeconds;
  }
  seconds = milliSeconds / 1000;
  minutes = seconds / 60;
  hours = minutes / 60;

  // console.log("milliSeconds: ", milliSeconds, seconds, minutes, hours);
  if (sign === -1)
    return `${
      hours !== 0
        ? `${Math.round(hours)} hours ago`
        : `${Math.round(minutes)} minutes ago`
    }`;
  else
    return `${
      hours !== 0
        ? `In ${Math.round(hours)} hours`
        : `In ${Math.round(minutes)} minutes `
    }`;
}
