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

   it('should return 1 when passed 1', () => {
     expect(kata.summation(1)).to.equal(1);
   })

   it("should return 3 when passed 2", () => {
     expect(kata.summation(2)).to.equal(3);
   })

   it("should return 15 when passed 5", () => {
     expect(kata.summation(5)).to.equal(15);
   })

   it('should throw an error if passed a string', () => {
     expect(() => kata.summation('hello').to.throw('You must pass a number'));
   })

   it('should throw an error if passed a float', () => {
     expect(() => kata.summation(1.33).to.throw('You must pass a number'));
   })
})
