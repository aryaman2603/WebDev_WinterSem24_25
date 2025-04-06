const x = 5;
const y = 10;
console.log(x*y);

if(y<20)
{
    console.log("y is less than 20");
}
else{
    console.log("y is greater than 20");
}
function isPalindrome(str){
    let j = str.length -1;
    for(let i=0;i<str.length/2;i++)
    {
        if(str[i]!=str[j])
        {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "markram";
let str2 = "racecar";
let str3 = "car";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return "Invalid";
    }
    
    return `Result: ${result}`;
}

let num1 = parseFloat(prompt("Enter first number:"));
let operator = prompt("Enter operation (+, -, *, /):");
let num2 = parseFloat(prompt("Enter second number:"));

alert(calculate(num1, num2, operator));
