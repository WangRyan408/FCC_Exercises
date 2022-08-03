/*
    Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Steamroller
    
   Flatten a nested array. You must account for varying levels of nesting.
-
*/


function steamrollArray(arr) {

    let newArr = [].concat(...arr);
    
    for (let i = 0; i < arr.length; i++) {
        if (newArr.some(Array.isArray)) {
            steamrollArray(newArr);
        } else {
            console.log(newArr);
        }
    }

  }
  
 /*
  function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return console.log(flat.some(Array.isArray) ? steamrollArray(flat) : flat);
    //return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
 
  }
  */
  //steamrollArray([1, [2], [3, [[4]]]]);
  steamrollArray([[["a"]], [["b"]]]);
  

  