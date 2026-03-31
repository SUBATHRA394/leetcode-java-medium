/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    const m = num1.length;
    const n = num2.length;
    // Result array can be at most m + n digits
    const result = new Array(m + n).fill(0);

    // Multiply digits from right to left
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const digit1 = num1[i] - '0';
            const digit2 = num2[j] - '0';
            const product = digit1 * digit2;

            // p1 is the carry position, p2 is the current position
            const p1 = i + j;
            const p2 = i + j + 1;

            const sum = product + result[p2];

            result[p2] = sum % 10;          // Current digit
            result[p1] += Math.floor(sum / 10); // Carry over
        }
    }

    // Remove leading zeros and join
    while (result[0] === 0) {
        result.shift();
    }

    return result.join('');
};

// --- Test Cases ---
console.log(multiply("2", "3"));      // Output: "6"
console.log(multiply("123", "456"));  // Output: "56088"
