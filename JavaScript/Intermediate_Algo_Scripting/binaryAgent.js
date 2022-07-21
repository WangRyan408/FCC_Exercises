/*
    Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Binary Agents
    
    Return an English translated sentence of the passed binary string.
    The binary string will be space separated.

-
*/

// My Shitty Solution - Completed
/*
    binaryArr - takes str and splits each byte of binary into and array
    textArr - Initialized as empty array, mapped from binary to decimal,
              and then from decimal to a string using ASCII
    text - joins textArr using empty spaces
*/
function binaryAgent(str) {

    let binaryArr = str.split(" ");
    let textArr = [];
    let text = "";

    textArr = binaryArr.map(x => parseInt(x, 2))
          .map(y => String.fromCharCode(y));

    text = textArr.join(" ");
    
    return text;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");