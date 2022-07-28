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

function whatIsInAName(collection, source) {
    const arr = [];
    const keys = Object.keys(source);
    const values = Object.values(source);
    // Only change code below this line

    for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            if (collection[i].hasOwnProperty(keys[j]) && Object.values(collection[i]).some(x => x == values[j])) {
                arr.push(collection[i]);
            }
        }
  
    // Only change code above this line

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

  return console.log(arr);
  //return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });