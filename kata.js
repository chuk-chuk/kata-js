export default class Kata {
  summation (number) {
    var ary = []
    if (number === undefined) {
      return 0;
    } else {
      for(var i = 1; i <= number; i++){
        ary.push(i)
      }
      return ary.reduce((a, b) => a + b)
    }
  }
}
