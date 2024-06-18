const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  describe('isPassword', () => {
    it("should return false when the password is less than 8 characters", () => {
        const password = '1234567';
        const validate = new Validate();
        expect(validate.isPassword(password)).toEqual(false);
    });

    it("should return false when the password does not contain at least 1 uppercase", () => {
      const password = '12345678';
      const validate = new Validate();
      expect(validate.isPassword(password)).toEqual(false);
    });

    it("should return false when the password does not contain at least 1 lowercase", () => {
      const password = 'ONEOOTWO';
      const validate = new Validate();
      expect(validate.isPassword(password)).toEqual(false);
    });

    it("should return false when the password does not contain at least 1 number", () => {
      const password = 'WORDSYEE';
      const validate = new Validate();
      expect(validate.isPassword(password)).toEqual(false);
    });

    it("should return true when the password contains an uppercase, lowercase, and number", () => {
      const password = 'Uplower9';
      const validate = new Validate();
      expect(validate.isPassword(password)).toEqual(true);
    });

  });

  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
});