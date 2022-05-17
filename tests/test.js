const expect = chai.expect;

describe("searchWeather", () => {
  it("should return array", () => {
    const test = new WorldWeather();
    //console.log("hourlyTime", typeof hourlyTime);
    //console.log(test.hourlyTime);
    test.searchWeather();
    //test.searchWeatherNewYork();
    expect(Array.isArray(test.hourlyTime)).to.equal(true);
  });
});
