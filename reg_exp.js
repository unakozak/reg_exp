// Write a regular expression to search for the HTML color specified as #ABCDEF,
// that is, # and then contains 6 hexadecimal characters.

let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2";

let reg_exp = /#\w{6}/g;
let result = str.match(reg_exp);
console.log(result);

//Create a query to identify numbers in the text that are not followed by a + sign. 
//(Examples of expressions “2*9-6*5 ” or (3+5)-9*4)

let str1 = "2*9-6*5";
let str2 = "(3+5)-9*4";

reg_exp = /\d\+/g;
let reg_exp2 = /\d/g;
result = str2.replace(reg_exp, "").match(reg_exp2);

console.log(result);

// Create a query to output only correctly written expressions with brackets 
// (The number of open and closed brackets should be the same)

let str3 = "()(())()()))())())";

reg_exp = /\(\)/g;
result = str3.match(reg_exp);
console.log(result);



//Find the time in the text. The time has the clock format:minutes. Both hours and minutes consist
//of two digits, for example: 09:00. Write a regular expression to find the time
//in the line: "Breakfast at 09:00". Note that "37:98" is an incorrect time.


let str4 = "Breakfast at 09:00 costs 66:82";
reg_exp = /[0-2][0-9]:[0-2][0-9]/g;
result = str4.match(reg_exp);
console.log(result);


//Create a query to select fractional numbers from the text with a decimal separator in the form of a dot. 
//The digits of the whole part may not be highlighted or separated by a space or comma. 

let str5 =  "the cost of this coffee is 3.23 usd and 67.922 is total cost for your dinner";
reg_exp = /\d+\.\d+/g;
result = str5.match(reg_exp);
console.log(result);

//Create a query to highlight the text enclosed in quotation marks.

let str6 = 'hello my name is "Una" and i like it :) ';
let regexp = /"[^"]+"/g;
result = str6.match(regexp);
console.log(result);
