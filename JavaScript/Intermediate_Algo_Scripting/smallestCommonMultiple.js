/*
    Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Smallest Common Multiple
*/

//My Shitty Solution 

function smallestCommons(arr) {
    
    const numRange = [];
    let filteredArr = [];
    let testArr = [];
    let divisor = [];
    let count = 0;
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

    filteredArr = numRange.filter(x => x > 1);

    //const baseCase = [...filteredArr];
    do {
        for (let i = 0; i < filteredArr.length; i++) {
            if (filteredArr[i] / 2 == Math.floor(filteredArr[i]) / 2) {
                testArr.push(filteredArr[i] / 2);
                divisor.push(2);
            }

            if (filteredArr[i] / 3 == Math.floor(filteredArr[i]) / 3) {
                testArr.push(filteredArr[i] / 3);
                divisor.push(3);
            }
        } while ()
    }
    

    return console.log();


  }
  
  smallestCommons([1,5]);
  //smallestCommons([10,2]);
  //smallestCommons([23, 18]);