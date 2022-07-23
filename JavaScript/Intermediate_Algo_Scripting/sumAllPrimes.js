/*
    Ryan Wang
    FCC - JavaScript Algorithm Scripting
    Intermediate Algorithm Scripting
    Sum All Primes
*/

//My Shitty Solution - Complete
function sumPrimes(num) {
  let max = [];
  let prime = [];
  let sum = 0;

  //Helper function stolen from StackOverflow -- flags true if prime
  function isPrime (n){
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}

  //Gets all numbers from 1 to max num into an array
  for (let i = 1; i <= num; i++) {
    max.push(i);
  }

  //Filters primes into new array, then sums them.
  prime = max.filter(data => isPrime(data));
  sum = prime.reduce((a,b) => (a + b));

  //return console.log(sum);
  return sum;

}

sumPrimes(10);
 

