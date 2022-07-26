/*
    Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Arguments Optional
    
    Create a function th addTogether(2) should return a function.
    Calling this returned function with a single argumat sums two arguments together. If only one argument is provided,
    then return a function that expects one argument and returns the sum.
    For example, addTogether(2, 3) should return 5, andent will then return the sum:
    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) returns 5.
    If either argument isn't a valid number, return undefined.



*/

//My shitty solution
function addTogether() {
    let args = [].slice.call(arguments);
    
    if (args.length == 1 && typeof args[0] == "number") {
        return function(arg) {
            return (typeof args[0] == typeof arg) ? args[0] + arg : undefined;
        }
    } else if (args.length == 2 && typeof args[0] == typeof args[1]) {
        return args[0] + args[1];
    } else {
        return undefined;
    }

    //return console.log(args);


  }
  
  //addTogether(2,3);
  addTogether(5)(7);