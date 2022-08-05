/*
    Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Steamroller
    
   Flatten a nested array. You must account for varying levels of nesting.
-
*/

<<<<<<< HEAD
/*

=======

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
>>>>>>> e7afd2b8aa23112ac62fa1b76c43ecd9e48fdba2
  function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return console.log(flat.some(Array.isArray) ? steamrollArray(flat) : flat);
    //return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
 
  }
<<<<<<< HEAD
*/
  function steamrollArray(arr) {
    
    const flatten = [].concat(...arr);
        if (flatten.some(Array.isArray)) {
             return steamrollArray(flatten);
        } else {
            return flatten;
        }
    };

    //return console.log(flatten);

  
=======
  */
>>>>>>> e7afd2b8aa23112ac62fa1b76c43ecd9e48fdba2
  //steamrollArray([1, [2], [3, [[4]]]]);
  console.log(steamrollArray([[["a"]], [["b"]]]));
  

  