/**
 *  Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Make A Person
 */

//My shitty solution - Completed
var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    let fullArr = firstAndLast.split(" ");
    
    
    this.setFirstName = function(first) {
        fullArr[0] = first;
    }
    
    this.setLastName = function(last) {
        fullArr[1] = last;
    }

    this.setFullName = function(firstAndLast) {
        fullArr = firstAndLast.split(" ");
    }
    
    this.getFullName = function() {
      return fullArr.join(" ");
    };

    this.getFirstName = function() {
        return fullArr[0];
    }

    this.getLastName = function() {
        return fullArr[1];
    }

    
    return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
  
  console.log(bob.getFullName());