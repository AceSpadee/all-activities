class Validate {}

Validate.prototype.isPassword = (password) => {
  // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  if (password.length <= 8) {
    return false;
  }

  const passArr = password.split("");
  const lowerCaseStr = 'abcdefghijklmnopqrstuvwxyz';
  const upperCasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '1234567890';

  let numsIncludes;
  let lowerCaseIncludes;
  let upperCaseIncludes;

  passArr.forEach(element => {

    if (nums.includes(element)) {
      numsIncludes = true
    }

    if (lowerCaseStr.includes(element)) {
      lowerCaseIncludes = true
    }

    if (upperCasestr.includes(element)) {
      upperCaseIncludes = true
    }


  });

  if (upperCaseIncludes && lowerCaseIncludes && numsIncludes) {
    return true;
   }  else {
      return false;
    }
  };
  // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.


const validate = new Validate();

validate.isPassword("meow1234")

module.exports = Validate;
