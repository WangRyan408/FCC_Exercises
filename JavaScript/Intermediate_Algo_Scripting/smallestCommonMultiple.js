/*
    Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Smallest Common Multiple
*/

//My Shitty Solution - Completed

function smallestCommons(arr) {
    
    /*
        Declared arrays and what will later be the LCM (sum)

        numRange - Range of numbers in the array that's given (argument)
        filteredArr - filtered out anything less than 2. Not really necessary
        Divisor - Algorithm does short division, stores common divisor in this array
        sum - the LCM. Initialized to 1
    */
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
    
    /*
        Suggestions - Use map to figure out which elements are divisible
                    - Divide those and add either 2 or 3 to divisor.
    */

    //Holy fuck I just brute forced the fuck outta this one - I'm so shit

    // Do while that checks if anything in filteredArr is divisible by 2, 3, 5, or 7.
    // Divides them by their respective prime numbers if divisible (using map)
    // And then adds the common divisor into the divisor array.
    // Keeps doing this while array still has numbers that can be divided (by 2 or 3)
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
        if (filteredArr.some(x => x % 5 == 0)) {
            filteredArr = filteredArr.map(x => {
                if (x % 5 == 0) {
                    return x / 5;
                } else {
                    return x;
                }
            })
            divisor.push(5);
        }
        if (filteredArr.some(x => x % 7 == 0)) {
            filteredArr = filteredArr.map(x => {
                if (x % 7 == 0) {
                    return x / 7;
                } else {
                    return x;
                }
            })
            divisor.push(7);
        }
    } while (filteredArr.some(x => x % 2 == 0) || filteredArr.some(x => x % 3 == 0));
    

    /*
        Multiplies the initialized value of sum (1) w/ the contents of filteredArr 
        and divisor to get the LCM
    */
    for (let i = 0; i < filteredArr.length; i++) {
        sum *= filteredArr[i];
    }

    for (let j = 0; j < divisor.length; j++) {
        sum *= divisor[j];
    }


    return console.log(sum);
    
  


  }
  
  smallestCommons([1,5]);
  smallestCommons([10,2]);
  smallestCommons([23, 18]);
  smallestCommons([1, 13]);
