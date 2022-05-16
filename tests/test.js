const expect = chai.expect;
//import { WorldWeather } from "../index.js";
//const WorldWeather = require("../index.js");

//let pokemonager;

describe("searchWeather", () => {
  //   beforeEach(() => {
  //     pokemonager = new Pokemonager();
  //   });

  it("should return array", () => {
    const test = new WorldWeather("Tokyo");
    //console.log("hourlyTime", typeof hourlyTime);
    console.log(test.hourlyTime);
    test.searchWeather();
    expect(Array.isArray(test.hourlyTime)).to.equal(true);
  });
});
//   it("should create an array of user-facing review objects synchronously", () => {
//     // Setup
//     const reviewBuilder = new ReviewBuilder();

//     // Exercise
//     const actual = reviewBuilder.buildReviewsSync();

//     // Assert
//     expect(actual).to.deep.equal(expected);
//   });
// });
