/*
    Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Steamroller
    
   Flatten a nested array. You must account for varying levels of nesting.
-
*/

/*

  function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return console.log(flat.some(Array.isArray) ? steamrollArray(flat) : flat);
    //return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
 
  }
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

  
  //steamrollArray([1, [2], [3, [[4]]]]);
  console.log(steamrollArray([[["a"]], [["b"]]]));
  

  