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
            
        }
    }


    return console.log(arr[1]);

  }
  
 // steamrollArray([1, [2], [3, [[4]]]]);
  steamrollArray([[["a"]], [["b"]]]);