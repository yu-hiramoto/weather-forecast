class WorldWeather {
  constructor() {
    this.hourlyTime = [];
    this.weatherCode = [];
    this.weatherCodeObject = {
      0: "晴天🌤",
      1: "晴れ🌤",
      2: "一部曇り⛅️",
      3: "曇り☁︎",
      45: "霧🌫",
      48: "濃い霧🌫",
      51: "霧雨🌂",
      53: "霧雨🌂",
      55: "霧雨🌂",
      56: "霧雨🌂",
      57: "霧雨🌂",
      61: "弱い雨🌂",
      63: "雨☔️",
      65: "強い雨☔️",
      66: "霰",
      67: "霰",
      71: "弱い雪⛄️",
      73: "雪⛄️",
      75: "強い雪⛄️",
      99: "重度のひょうを伴う雷雨⛄️⚡️",
      96: "軽度のひょうを伴う雷雨⛄️⚡️",
      95: "雷雨☔️⚡️",
      86: "重度のにわか雪⛄️",
      85: "軽度のにわか雪⛄️",
      82: "重度のにわか雨☔️⚡️",
      81: "中度のにわか雨🌂",
      80: "軽度のにわか雨🌂",
      77: "霧雪⛄️",
    };
    this.city = {
      Tokyo: [35.6785, 139.6823],
      "New York": [40.71, -74.01],
      London: [51.5002, -0.1262],
      "North Pole": [90, 0],
      "Sauth Pole": [-90, 0],
    };
  }
  async searchWeather() {
    for (const key of Object.keys(this.city)) {
      await axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${this.city[key][0]}&longitude=${this.city[key][1]}&hourly=temperature_2m,weathercode`
        )
        .then((data) => {
          this.hourlyTime = data.data.hourly.time;
          this.weatherCode.push(data.data.hourly.weathercode);
        });
    }
    this.weatherCreatElement();
  }

  weatherCreatElement() {
    const weatherTable = document.getElementById("weatherTable");
    for (let i = 12; i < this.hourlyTime.length; i = i + 24) {
      const newElement = document.createElement("tr");
      const newDate = document.createElement("td");
      newDate.innerText = this.hourlyTime[i].replace("T", "  ");
      newElement.appendChild(newDate);
      for (let j = 0; j < this.weatherCode.length; j++) {
        const newWeather = document.createElement("td");
        newWeather.innerText = this.weatherCodeObject[this.weatherCode[j][i]];
        newElement.appendChild(newWeather);
      }
      weatherTable.appendChild(newElement);
    }
  }
}

window.WorldWeather = WorldWeather;
