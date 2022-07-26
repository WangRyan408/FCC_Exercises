/**
 *  Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Make A Person
 */


var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    
    
    this.setFirstName = function(first) {
        this.firstName = first;
    }
    
    this.setLastName = function(last) {
        this.lastName = last;
    }

    this.setFullName = function(firstAndLast) {
        this.fullName = firstAndLast;
    }
    
    this.getFullName = function() {
      return fullName;
    };

    this.getFirstName = function() {
        return firstName;
    }

    this.getLastName = function() {
        return lastName;
    }

    
    return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
  
  console.log(Object.keys(bob).length);