const expect = require("chai").expect;
import Kata from "../kata";

describe("Kata", () => {
  let kata;
   beforeEach(() => {
     kata = new Kata()
   });

  it('returns one if length is less than two', () => {
    expect(kata.summation(1)).to.equal(1)
  })

  it('always should be an integer', () => {
    expect(kata.summation(1)).to.be.a( 'number' );
  })


})
