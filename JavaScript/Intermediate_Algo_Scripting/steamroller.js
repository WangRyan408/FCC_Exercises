/*
    Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Steamroller
    
   Flatten a nested array. You must account for varying levels of nesting.

*/

function steamrollArray(arr) {
    let newArr = [];


    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let subArr = steamrollArray(arr[i]);
            newArr = newArr.concat(subArr);
        } else {
            newArr.push(arr[i]);
        }
    }


    return console.log(newArr);

  }
  
 // steamrollArray([1, [2], [3, [[4]]]]);
  steamrollArray([[["a"]], [["b"]]]);