const expect = require("chai").expect;
import Kata from "../kata";

describe("Kata", () => {
  let kata;
   beforeEach(() => {
     kata = new Kata()
   });

   it("should return 0 when passed nothing", () => {
     expect(kata.summation()).to.equal(0);
   })
})
