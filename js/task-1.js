 function checkNumberSign(number) {
    if (number > 0) {
        return "positive";
    } else if (number < 0) {
        return "negative";
    } else {
        return "zero";
    }
 }
console.log(checkNumberSign(5));    // Output: "positive"      
console.log(checkNumberSign(-3));   // Output: "negative"

function lengthOfString(str) {
    return str.length;
}
console.log(lengthOfString("Hello world")); // Output: 11
console.log(lengthOfString("JavaScript")); // Output: 10