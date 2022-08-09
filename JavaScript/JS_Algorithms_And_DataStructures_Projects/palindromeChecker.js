/*
    Ryan Wang
    FCC - JavaScript Algorithm Scripting
    Intermediate Algorithm Scripting
    Palindrome Checker


Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both 
forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters 
(punctuation, spaces and symbols) and turn everything into the same 
case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as 
racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, 
such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

*/

//My shitty solution - completed
function palindrome(str) {

    // none of non word character (alpha numeric), once or more
    // [^\w]* - Only allows word characters (e.g. a-z, A-Z, 0-9, including _)
    // [_]* - No underscore
    // /g - global flag, searches entire string.
    const regex = /[^\w]*[_]*/g;

    const newStr = str.replace(regex, '')
                      .toLowerCase();

    const test = newStr.split('');

    let forward = [];
    let backward = [];
    
    for (let i = 0; i < test.length; i++) {
        forward.push(test[i]);
        
    }
    
    for (let j = test.length - 1; j >= 0; j--) {
        backward.push(test[j]);
    }

    
   if (forward.every((x, i) => x == backward[i])) {
    return console.log(true);
   } else {
    return console.log(false);
   }
   
    //return console.log(test);
  
    
  }
  //palindrome("never odd or even");
  //palindrome("eye");
  //palindrome("_eye");
  //palindrome("0_0 (: /-\ :) 0-0");
  palindrome("not a palindrome");
  palindrome("A man, a plan, a canal. Panama");