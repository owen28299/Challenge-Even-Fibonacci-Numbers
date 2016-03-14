/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  var Fibs = [1,1];
  //define your base case, validate your input
  for (var i = 1; Fibs[Fibs.length - 1] <= maxFibValue; i++){
    Fibs.push(Fibs[i] + Fibs[i - 1]);
  }

  Fibs.pop();

  // do your work here

  for(var n = 0; n <= Fibs[Fibs.length - 1]; n++){
    if(n % 2 === 0 && Fibs.indexOf(n) !== -1){
      sum += n;
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  var Fibs = [1,1];
  //define your base case, validate your input
  for (var i = 1; Fibs[Fibs.length - 1] <= maxFibValue; i++){
    Fibs.push(Fibs[i] + Fibs[i - 1]);
  }

  Fibs.pop();

  //do your work here
  highest = Fibs[Fibs.length - 1];

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};