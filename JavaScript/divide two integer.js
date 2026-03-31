/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX = 2147483647; // 2^31 - 1
    const MIN = -2147483648; // -2^31

    // Handle overflow case
    if (dividend === MIN && divisor === -1) return MAX;

    // Determine the sign of the result
    const negative = (dividend < 0) !== (divisor < 0);

    // Use absolute values (using Math.abs is okay, or manual conversion)
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let quotient = 0;

    // Exponential subtraction (bit shifting)
    while (a >= b) {
        let tempDivisor = b;
        let multiple = 1;
        
        // Double the divisor until it's larger than the remaining dividend
        while (a >= (tempDivisor << 1) && (tempDivisor << 1) > 0) {
            tempDivisor <<= 1;
            multiple <<= 1;
        }
        
        a -= tempDivisor;
        quotient += multiple;
    }

    return negative ? -quotient : quotient;
};
