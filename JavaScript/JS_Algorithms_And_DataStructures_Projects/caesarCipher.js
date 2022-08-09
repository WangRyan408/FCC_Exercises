/*
    Ryan Wang
    FCC - JavaScript Algorithm Scripting
    JavaScript Algorithms and Data Structures Projects
    Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted 
by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and 
returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.

*/

// My shitty solution - Completed
// Could be more concise by calling map function
function rot13(str) {

    let arr = [];
    let newStr = "";
    //Key value pair for the cipher
    const rot = {
        'A' : "N",
        'B' : "O",
        'C' : "P",
        'D' : "Q",
        'E' : "R",
        'F' : "S",
        'G' : "T",
        'H' : "U",
        'I' : "V",
        'J' : "W",
        'K' : "X",
        'L' : "Y",
        'M' : "Z",
        'N' : "A",
        'O' : "B",
        'P' : "C",
        'Q' : "D",
        'R' : "E",
        'S' : "F",
        'T' : "G",
        'U' : "H",
        'V' : "I",
        'W' : "J",
        'X' : "K",
        'Y' : "L",
        'Z' : "M",
    }

    const regex = /[A-Z]/;

    arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(regex)) {
            arr.splice(i, 1, rot[arr[i]]);
        }
    }

    newStr = arr.join("");

    //return console.log(regex.test(arr[0]));
    //return console.log(arr)
    return console.log(newStr);

  }
  
  rot13("SERR PBQR PNZC");