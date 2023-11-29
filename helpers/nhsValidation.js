// Function to validate NHS Numbers
function validateNHSNumber(nhsNumber) {
    // Check if the input is 10 digits string
    if (!/^\d{10}$/.test(nhsNumber)) {
        return false; // Invalid if not 10 digits
    }

    // Define the weighting factors
    const weightingFactors = [10, 9, 8, 7, 6, 5, 4, 3, 2];

    // Step 1: Multiply each digit by its corresponding weighting factor + Step 2: Add the results of each multiplication
    const weightedSum = nhsNumber
        .slice(0, 9) // Take the first 9 digits
        .split('')
        .map((digit, index) => digit * weightingFactors[index])
        .reduce((acc, value) => acc + value, 0);

    // Step 3: Calculate the remainder when divided by 11
    const remainder = weightedSum % 11;

    // Step 4: Subtract the remainder from 11 to get the check digit
    const calculatedCheckDigit = remainder === 0 ? 0 : 11 - remainder;

    // If the result is 10, the NHS Number is invalid
    if (calculatedCheckDigit === 10) {
        return false;
    }

    // Step 5: Check if the calculated check digit matches the 10th digit
    return calculatedCheckDigit === parseInt(nhsNumber.charAt(9));
}

// Export the function so that it can be used in other files
module.exports = {
    validateNHSNumber,
};