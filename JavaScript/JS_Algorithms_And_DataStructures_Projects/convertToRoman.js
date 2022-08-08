/*
    Ryan Wang
    FCC / JavaScript Algorithm Scripting
    JavaScript Algorithms and Data Structures Projects
    Roman Numeral Converter

    Convert the given number into a roman numeral.

    Roman numerals 	Arabic numerals
            M 	        1000
            CM 	        900
            D 	        500
            CD 	        400
            C 	        100
            XC 	        90
            L 	        50
            XL 	        40
            X 	        10
            IX 	        9
            V 	        5
            IV 	        4
            I 	        1

    All roman numerals answers should be provided in upper/case.
*/

//My shitty solution - Completed

//Brute forced the solution
//TODO: Find a better, less hardcoded, more concise solution
function convertToRoman(num) {
    const romanNum = {
        1000: "M",
        900 : "CM",
        500 : "D",
        400 : "CD",
        100 : "C",
        90 : "XC",
        50 : "L",
        40 : "XL",
        10 : "X",
        9 : "IX",
        5 : "V",
        4 : "IV",
        1 : "I"
    }


    let arr = [];


    let temp = num;

    while (temp - 1000 >= 0) {
        arr.push(romanNum['1000']);
        temp -= 1000;
    }

    while (temp - 900 >= 0) {
        arr.push(romanNum['900']);
        temp -= 900;
    }

    while (temp - 500 >= 0) {
        arr.push(romanNum['500']);
        temp -= 500;
    }

    while (temp - 400 >= 0) {
        arr.push(romanNum['400']);
        temp -= 400;
    }

    while (temp - 100 >= 0) {
        arr.push(romanNum['100']);
        temp -= 100;
    }

    while (temp - 90 >= 0) {
        arr.push(romanNum['90']);
        temp -= 90;
    }

    while (temp - 50 >= 0) {
        arr.push(romanNum['50']);
        temp -= 50;
    }

    while (temp - 40 >= 0) {
        arr.push(romanNum['40']);
        temp -= 40;
    }

    while (temp - 10 >= 0) {
        arr.push(romanNum['10']);
        temp -= 10;
    }

    while (temp - 9 >= 0) {
        arr.push(romanNum['9']);
        temp -= 9;
    }

    while (temp - 5 >= 0) {
        arr.push(romanNum['5']);
        temp -= 5;
    }

    while (temp - 4 >= 0) {
        arr.push(romanNum['4']);
        temp -= 4;
    }

    while (temp - 1 >= 0) {
        arr.push(romanNum['1']);
        temp -= 1;
    }

    let str = arr.join("");
    
    return console.log(str);
    //return num;


   }

   
   convertToRoman(68);
   convertToRoman(2);