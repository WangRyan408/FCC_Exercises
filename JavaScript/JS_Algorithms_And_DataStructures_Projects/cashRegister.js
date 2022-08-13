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
    //Declared and initialized Variables
    const FLOAT = 100;
    let changeOwed;
    let totalCash;
    let totalCashFloat;
    let changeCpy;

    let possibleChange = 0;
    let billKey = [];
    let billValues = [];
    let cidFloat = [];
    let changeArr = [];
    let filterArr = [];

    changeOwed = (cash - price) * FLOAT;
    changeCpy = changeOwed;
    totalCashFloat = 0;



    let monies = {
        status : "",
        change : []
    };

    let bills = {
        PENNY : 1,
        NICKEL : 5,
        DIME : 10,
        QUARTER : 25,
        ONE : 100,
        FIVE : 500,
        TEN : 1000,
        TWENTY : 2000,
        HUNDRED : 10000

    };

    
    billKey = Object.keys(bills)
                    .reverse();
    billValues = Object.values(bills)
                       .reverse();

    //Getting total cash available in cid into 1 variable - totalCash
    for (let i = 0; i < cid.length; i++) {
        //looping through cid and adding money
        //multiplying by 100 because evil floats
        totalCashFloat += cid[i][1] * FLOAT;
        cidFloat.push(Math.round(cid[i][1] * FLOAT));
    }

    //Format requirements dictate highest value currency is first; therefore reverse
    cidFloat = cidFloat.reverse();
    
    //Dividing to get actual monetary value
    totalCash = totalCashFloat / 100;



    // Basically this shit calculates the amount needed to pay change
    // Does so by checking each coin/bill from largest to smallest
    // And then checking to see how many of each it can use
    // So on and so forth until it gets all the money needed to pay change
    // Pushes to results to an array
    for (let j = 0; j < cid.length; j++) {
        let max = 0; 
       if ((changeCpy - billValues[j]) > 0) {
            while ((max + billValues[j]) <= changeCpy && (max + billValues[j]) <= cidFloat[j]) {
                max += billValues[j];  
            }
            changeCpy -= max;
            changeArr.push([billKey[j], (max / FLOAT)]);
       }
    }

    filterArr = billValues.filter(x => x <= changeOwed);
    let cidFloatCpy = cidFloat.reverse();
    cidFloatCpy.splice(filterArr.length);
                              
    for (let i = 0; i < filterArr.length; i++) {
        possibleChange += cidFloatCpy[i];
    }

    //Filtering algo to see what does what
    if (totalCashFloat > changeOwed && possibleChange >= changeOwed) {
        
        //Name of coins/bills
        //billKey = Object.keys(bills);

        monies.status = "OPEN";
        monies.change.push(...changeArr)
    } else if (changeOwed == totalCashFloat) {
        monies.status = "CLOSED";
        monies.change.push(...cid);
    } else {
        monies.status = "INSUFFICIENT_FUNDS";
    }

    console.log(changeArr);
    console.log(monies);

    return monies;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  //checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  //checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  //checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);