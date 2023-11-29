// Import the NHS helper
const { validateNHSNumber } = require('./helpers/nhsValidation');

// Examples
const validNHSNumbers = ['5990128088', '1275988113', '4536026665'];
const invalidNHSNumbers = ['5990128087', '4536016660'];

// Validate and print results
validNHSNumbers.forEach(nhsNumber => {
    console.log(`${nhsNumber}: ${validateNHSNumber(nhsNumber) ? 'Valid' : 'Invalid'}`);
});

invalidNHSNumbers.forEach(nhsNumber => {
    console.log(`${nhsNumber}: ${validateNHSNumber(nhsNumber) ? 'Valid' : 'Invalid'}`);
});
