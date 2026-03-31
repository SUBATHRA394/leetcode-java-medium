/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // Base case
    let currentString = "1";

    // Iterate from 2 to n to build the sequence
    for (let i = 2; i <= n; i++) {
        let nextString = "";
        let count = 1;

        for (let j = 0; j < currentString.length; j++) {
            // Check if the next character is the same
            if (currentString[j] === currentString[j + 1]) {
                count++;
            } else {
                // If different, append the count and the digit
                nextString += count.toString() + currentString[j];
                count = 1; // Reset count for the next digit
            }
        }
        currentString = nextString;
    }

    return currentString;
};

// --- Test Cases ---
console.log(countAndSay(1)); // Output: "1"
console.log(countAndSay(4)); // Output: "1211" (1-11-21-1211)
