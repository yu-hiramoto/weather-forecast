console.log("hello");

let hourlyTime;
let weatherCode;

const weatherCodeObject = {
  0: "晴天",
  1: "晴れ",
  2: "一部曇り",
  3: "曇り",
  45: "霧",
  48: "濃い霧",
  51: "霧雨",
  53: "霧雨",
  55: "霧雨",
  56: "霧雨",
  57: "霧雨",
  61: "弱い雨",
  63: "雨",
  65: "強い雨",
  66: "霰",
  67: "霰",
  71: "弱い雪",
  73: "雪",
  75: "強い雪",
  99: "重度のひょうを伴う雷雨",
  96: "軽度のひょうを伴う雷雨",
  95: "雷雨",
  86: "重度のにわか雪",
  85: "軽度のにわか雪",
  82: "重度のにわか雨",
  81: "中度のにわか雨",
  80: "経度のにわか雨",
  77: "霧雪",
};

const serchWeather = async function () {
  await axios
    .get(
      "https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m,weathercode"
    )
    .then(function (data) {
      hourlyTime = data.data.hourly.time;
      weatherCode = data.data.hourly.weathercode;
      console.log(hourlyTime);
      console.log(weatherCode);
      weatherCreatElement();
    });
};
serchWeather();

function weatherCreatElement() {
  const weatherForm = document.getElementById("weatherForm");
  for (let i = 0; i < hourlyTime.length; i++) {
    weatherForm.innerHTML += hourlyTime[i];
    weatherForm.innerHTML += weatherCodeObject[weatherCode[i]];
  }
}

// console.log(hourlyTime);
// console.log(weatherCode);
// axios
//   .get(
//     "https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=weathercode"
//   )
//   .then(function (data) {
//     console.log(data);
//   });
