/*
    Ryan Wang
    FCC - JavaScript Algorithm Scripting
    JavaScript Algorithms and Data Structures Projects
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

    //Replaces all non word chars and underscores with nothing; lowercases everything
    const newStr = str.replace(regex, '')
                      .toLowerCase();

    //Creates a char array out of the string                  
    const test = newStr.split('');

    //Initialize 2 arrays, one with the string normal and one typed backwards
    let forward = [];
    let backward = [];
    
    //Adds string to forward
    for (let i = 0; i < test.length; i++) {
        forward.push(test[i]);
        
    }
    
    //Adds reversed string to backward
    for (let j = test.length - 1; j >= 0; j--) {
        backward.push(test[j]);
    }

    //More elegant and concise return statement
    return forward.every((x, i) => x == backward[i]) ? true : false;

    //Old algo for determining truthy/falsy
/*
   if (forward.every((x, i) => x == backward[i])) {
    return console.log(true);
   } else {
    return console.log(false);
   }
*/
   
    //return console.log(test);
  
    
  }
  //palindrome("never odd or even");
  //palindrome("eye");
  //palindrome("_eye");
  //palindrome("0_0 (: /-\ :) 0-0");
  palindrome("not a palindrome");
  palindrome("A man, a plan, a canal. Panama");