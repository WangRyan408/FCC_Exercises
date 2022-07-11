/*
    Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Smallest Common Multiple
*/

//My Shitty Solution 

function smallestCommons(arr) {
    let leastMultiple = 0;
    const numRange = [];
    leastMultiple = arr[0] * arr[1];

    //Finds range of numbers regardless of whether the first or 2nd index has a larger value
    if (arr[0] > arr[1]) 
    {
        for (let i = arr[1]; i <= arr[0]; i++) {
            numRange.push(i);
        }
    }
    if (arr[0] < arr[1]) 
    {
        for (let i = arr[0]; i <= arr[1]; i++) {
            numRange.push(i);
        }
    }



    return console.log(leastMultiple);


  }
  
  smallestCommons([1,5]);
  smallestCommons([10,2]);
