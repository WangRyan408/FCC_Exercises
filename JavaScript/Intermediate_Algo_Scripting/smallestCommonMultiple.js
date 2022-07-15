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
    let divisor = [];
    let sum = 1;
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

    /*
        Suggestions - Use map to figure out which elements are divisible
                    - Divide those and add either 2 or 3 to divisor.
    */
    do {
        if (filteredArr.some(x => x % 2 == 0)) {
            filteredArr = filteredArr.map(x => {
                if (x % 2 == 0) {
                    return x / 2;
                } else {
                    return x;
                }
            })
            divisor.push(2);
        }
        if (filteredArr.some(x => x % 3 == 0)) {
            filteredArr = filteredArr.map(x => {
                if (x % 3 == 0) {
                    return x / 3;
                } else {
                    return x;
                }
            })
            divisor.push(3);
        }
    } while (filteredArr.some(x => x % 2 == 0) || filteredArr.some(x => x % 3 == 0));
    
    for (let i = 0; i < filteredArr.length; i++) {
        sum *= filteredArr[i];
    }

    for (let j = 0; j < divisor.length; j++) {
        sum *= divisor[j];
    }


    return console.log(filteredArr);
    //smallestCommons([10,2]);
    //smallestCommons([23, 18]);
  


  }
  
  smallestCommons([1,5]);
  smallestCommons([10,2]);
  smallestCommons([23, 18]);
  smallestCommons([1, 13]);
