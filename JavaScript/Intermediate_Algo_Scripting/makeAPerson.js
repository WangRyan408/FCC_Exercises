/**
 *  Ryan Wang
    FCC - JavaScript Algorithms and Data Structures
    Intermediate Algorithm Scripting
    Make A Person
 */


const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let arr = firstAndLast.split(" ");
    let firstName = arr[0];
    let lastName = arr[1];
    let fullName = firstName + " " + lastName;
    
    
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