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


/**
 * 
 * Current plan:
 *  Calculate amount of money needed through if else statements
 *  Check to see if calculated amount is greater or lower than amount in "drawer"
 *  If lower, return open status and cash, if greater, return insufficient and empty arr
 *  If exact, return closed and return cid
 */
function checkCashRegister(price, cash, cid) {
    
    const HUNDRED = 100;
    const TWENTY = 20;
    const TEN = 10;
    const FIVE = 5;
    const ONE  = 1;
    const QUARTER = 0.25;
    const DIME = 0.1;
    const NICKEL = 0.05;
    const PENNY = 0.01;

    let changeOwed;
    let totalCash;

    changeOwed = cash - price;
    totalCash = 0;

    let monies = {
        status : "",
        change : []
    };

    
    //Getting total cash available in cid into 1 variable - totalCash
    for (let i = 0; i < cid.length; i++) {
        //looping through cid and adding money
        //multiplying by 100 because evil floats
        totalCash += cid[i][1] * 100;
    }

    //Dividing to get actual monetary value
    totalCash /= 100;

    //Filtering algo to see what does what
    if (totalCash > changeOwed) {
        monies.status = "OPEN";
        monies.change.push(['one', 0.1])
    } else if (changeOwed == totalCash) {
        monies.status = "CLOSED";
        monies.change.concat(cid);
    } else {
        monies.status = "INSUFFICIENT_FUNDS";
    }

    return console.log(monies);
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);