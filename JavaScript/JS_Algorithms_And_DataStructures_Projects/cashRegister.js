/*
    Ryan Wang
    FCC / JavaScript Algorithm Scripting
    JavaScript Algorithms and Data Structures Projects
    Cash Register


Design a cash register drawer function checkCashRegister() that accepts purchase price 
as the first argument (price), payment as the second argument (cash), 
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key 
and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than 
the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value 
for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, 
with the change due in coins and bills, sorted in highest to lowest order, 
as the value of the change key.

*/

function checkCashRegister(price, cash, cid) {
    let change;

    let changeOwed = cash - price;
    const money = {
        status : '',
        change : [],

        set setStatus(newStatus) {


           this.status = newStatus;
        },
        
        set setChange(newChange) {
            this.change = newChange;
        }
        
    };



    return console.log(cid);
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);