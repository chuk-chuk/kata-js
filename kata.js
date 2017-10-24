export default class Kata {
  summation (number) {
   var ary = []
     if (number === undefined) {
       return 0;
     } else if (typeof number !== 'number' || number % 1 !== 0) {
         throw new Error("You must pass a number")
     } else for (var i = 1; i <= number; i++) {
       ary.push(i);
     };
   return ary.reduce((a, b) => a + b)
  }
}
