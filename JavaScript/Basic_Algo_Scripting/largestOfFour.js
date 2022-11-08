function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let bigNum = arr[i][0];
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > bigNum) {
          bigNum = arr[i][j];
        }
  
        if (j == arr[i].length - 1) {
          newArr.push(bigNum);
        }
      }
    }
    return newArr;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));