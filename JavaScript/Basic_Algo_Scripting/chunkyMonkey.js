
/*
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let count = 1;
    let lastSlice = 0;
    for (let i = 0; i < arr.length; i++) {
      if (count % size === 0) {
        let test = arr.slice(lastSlice, i + 1);
        newArr.push(test);
        lastSlice = i + 1;
      }
      if (i === arr.length - 1 && (count % size !== 0)) {
        let test = arr.slice(lastSlice, i + 1);
        newArr.push(test);
      }
      count++;
    }
    return newArr;
  }
  */

//Recursive Version
/*
function chunkArrayInGroups(arr, size){
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size));
  }
}
*/

//Do While Loop
function chunkArrayInGroups(arr, size) {
  let index = 0;
  let numTimes = 1;
  let newArr = [];
  do {
    let lice = arr.slice(index, size * numTimes);
    newArr.push(lice);
    index += size;
    numTimes++;
  } while (index < arr.length);
  return newArr;
}







  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

