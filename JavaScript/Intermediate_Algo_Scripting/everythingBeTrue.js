/*
    Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Everything Be True
    
    Check if the predicate (second argument) is truthy 
    on all elements of a collection (first argument).
    In other words, you are given an array collection of objects. 
    The predicate pre will be an object property and you need 
    to return true if its value is truthy. Otherwise, return false.
    In JavaScript, truthy values are values that translate 
    to true when evaluated in a Boolean context.
    Remember, you can access object properties through 
    either dot notation or [] notation.

*/

//My shitty solution - Completed
/**
 *  falsy - returns true if at least one value is false
 *  true - returns true if all values are true 
 * 
 */
function truthCheck(collection, pre) {

    const falsy = collection.some(x => {
        if (!Boolean(x[pre])) {
            return true;
        } else {
            return false;
        }
    })

    const truthy = collection.every(x => {
        if (Boolean(x[pre])) {
            return true;
        } else {
            return false;
        }
    });

        if (falsy) {
        //return console.log(false);
        return false;
    } else if (truthy) {
        //return console.log(true);
        return true;
    }


    
  }
  
  //truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: true}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
  //truthCheck([{name: "Quincy", role: "Founder", isBot: true}, {name: "Naomi", role: "", isBot: true}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
  //truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name");
  truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number");
  //truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number");