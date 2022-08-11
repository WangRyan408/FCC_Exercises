/*
    Ryan Wang
    FCC / JavaScript Algorithm Scripting
    JavaScript Algorithms and Data Structures Projects
    Telephone Number Validator


Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as 
it has the format of a valid US number. The following are examples of 
valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 
or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number 
based on any combination of the formats provided above. The area code is required. 
If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.

*/
/*
function telephoneCheck(str) {

    let arr = [];
    let newStr = "";

    const regex = /[a-zA-Z!"#$%&'*+,./]/g;

    const numRegex = /\D+/g;

    //Filters strings that dont have valid phone numbers
    //regex - All alpha and all non word chars that arent () and -
    //The match functions check if string has 10 or 11 digits
    if ((str.search(regex) == -1 && (str.match(/\d/g)||[]).length == 11) || (str.match(/\d/g)||[]).length == 10) {
        
        
    //If first char in 11 digit string is not a 1 or ( return false
    
    //This part is kinda fucked.
        if ((str.match(/\d/g)||[]).length == 11) {
            
            if (str[0] != 1) {

                return false;

            } 
            
            else if (str.includes('(') && !str.includes(')') && (str.indexOf('(') !== str.indexOf(')') - 4)) {
                return false;
            } 
            else if (!str.includes('(') && str.includes(')') && (str.indexOf('(') !== str.indexOf(')') - 4)) {
                return false;
            } 
            else {
                return true;
            }
        }
        //Checks to see if area code parentheses are set correctly
        //Must have both sides of parentheses and must be 4 indexes apart
        
        if (str.includes('(') && str.includes(')') && (str.indexOf('(') == str.indexOf(')') - 4)) {
            return true;
        } 
        else {
            return true;
        }



    } else if ((str.search(regex) !== -1 && (str.match(/\d/g)||[]).length !== 11) || (str.match(/\d/g)||[]).length !== 10) {

        return false;

    }

    

    
  }
  
*/
  function telephoneCheck(str) {

    const regex = /^(1\s)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    return str.search(regex) !== -1 ? true : false;

    //return true;
  }
  console.log(telephoneCheck("1 555-555-5555"));
  //console.log(telephoneCheck("555-555-5555"));
  //console.log(telephoneCheck("123**&!!asdf#"));
  //console.log(telephoneCheck("(555)555-5555"));
  console.log(telephoneCheck("1 555)555-5555"));