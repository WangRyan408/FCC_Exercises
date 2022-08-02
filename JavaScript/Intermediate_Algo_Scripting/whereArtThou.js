/*
    Ryan Wang
    FCC - JavaScript Algorithm Scripting
    Intermediate Algorithm Scripting
    Wherefore art thou



Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs 
(second argument). Each name and value pair of the source object has to be present 
in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object 
from the array (the first argument), because it contains the name and its value, 
that was passed on as the second argument.
*/

/*function whatIsInAName(collection, source) {
    const arr = [];
    const sourceKeys = Object.keys(source);
    const sourceValues = Object.values(source);
    // Only change code below this line

    for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < sourceKeys.length; j++) {
            if (collection[i].hasOwnProperty(sourceKeys[j]) || Object.values(collection[i]).some(x => x == sourceValues[j])) {
                arr.push(collection[i]);
        }
        //collection[i].hasOwnProperty(sourceKeys[j])
    // Only change code above this line

  }
}

  
  //return console.log(Object.keys(source));
  //return console.log(Object.values(collection[2]));
  //return console.log(collection[1]);
  //return console.log(Object.values(collection[1]).some(x => x == Object.values(source)));

  return console.log(sourceKeys);
  //return arr;
}
*/

function whatIsInAName(collection, source) {
    let arr = [];
    // [ 'apple', 'bat' ]
    const sourceKeys = Object.keys(source);
    

    //arr = collection.filter(obj => sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] == source[key]));
    for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < sourceKeys.length; j++) {
            if (collection[i].hasOwnProperty(sourceKeys[j]) && collection[i][sourceKeys[j]] == source[sourceKeys[j]]) {
                arr.push(collection[i]);
            }
        }
    }

/*
    for (let i = 0; i < collection.length; i++) {
        if (Object.values(collection[i]).some(x => x == Object.values(source))) {
            arr.push(collection[i]);
        }
  
    // Only change code above this line

  }
  */
  //return console.log(Object.keys(source));
  //return console.log(Object.values(collection[2]));
  //return console.log(collection[1]);
  //return console.log(Object.values(collection[1]).some(x => x == Object.values(source)));
  //Object.keys(collection[0]);
  return console.log(arr);
  //return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });