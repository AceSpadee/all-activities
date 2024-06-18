// TODO: Import the Validate class.
const Validate = require('../validate');
// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () => {
    describe('isPassword', () => {
        it('should return false when passed an empty string', () => {
            const emptyStr = ""
            const validate = new Validate();
            expect(validate.isPassword(emptyStr)).toEqual(false);
        })
    })
})

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
