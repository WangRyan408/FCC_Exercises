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

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr.push(steamrollArray(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
        
    }

    return console.log(newArr);


  }
  */
  function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return console.log(flat.some(Array.isArray) ? steamrollArray(flat) : flat);
    //return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
 
  }
  //steamrollArray([1, [2], [3, [[4]]]]);
  steamrollArray([[["a"]], [["b"]]]);
  

  