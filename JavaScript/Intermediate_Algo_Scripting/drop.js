/*
    Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Drop it
    
    Given the array arr, iterate through and remove each element starting
    from the first element (the 0 index) until the function func returns true 
    when the iterated element is passed through it.

    Then return the rest of the array once the condition is satisfied, 
    otherwise, arr should be returned as an empty array.

*/

// My shitty solution
/*
Current Ideas:
    ~~Recursively call function until reaches desired state~~
    

*/
function dropElements(arr, func) {

    const arrCpy = [...arr];
    let newArr = [];
    let test = [];
    let len = arr.length;
    let count = 0;

    newArr = arr.map(x => {
        return func(x);
    });


    for (let i = 0; i <= len; i++) {
        if (newArr[count] == false) {
            arrCpy.shift();
            i = 0;
            count++;
            len--;
        } else if (newArr[count] == true) {
            break;
        }
    }

    //test in console
    //return console.log(arrCpy);
    //actual return value
    return arrCpy;

  }
  
  // Tests
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
  dropElements([0, 1, 0, 1], function(n) {return n === 1;});
  dropElements([1, 2, 3], function(n) {return n > 0;});
  dropElements([1, 2, 3, 4], function(n) {return n > 5;});
  dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
  dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});