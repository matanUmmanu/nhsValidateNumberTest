// Import the NHS helper
const { validateNHSNumber } = require('../helpers/nhsValidation');

describe('NHS Number Validation', () => {
    test('Valid NHS Numbers', () => {
        const validNHSNumbers = ['5990128088', '1275988113', '4536026665'];

        validNHSNumbers.forEach(nhsNumber => {
            expect(validateNHSNumber(nhsNumber)).toBe(true);
        });
    });

    test('Invalid NHS Numbers', () => {
        const invalidNHSNumbers = ['5990128087', '4536016660'];

        invalidNHSNumbers.forEach(nhsNumber => {
            expect(validateNHSNumber(nhsNumber)).toBe(false);
        });
    });

    test('Invalid Format (less than 10 digits)', () => {
        const invalidFormatNHSNumber = '123'; // Less than 10 digits

        expect(validateNHSNumber(invalidFormatNHSNumber)).toBe(false);
    });


    test('Invalid Format (more than 10 digits)', () => {
        const invalidFormatNHSNumber = '12345678901'; // More than 10 digits

        expect(validateNHSNumber(invalidFormatNHSNumber)).toBe(false);
    });
});