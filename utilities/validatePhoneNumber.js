class ValidatePhoneNumber {
  checkPhoneNumberLength(phoneNumber) {
    const strNumber = phoneNumber.toString();
    if (strNumber.length != 10) {
      return false;
    } else {
      return true;
    }
  }
  checkStartsOfPhoneNumber(phoneNumber) {
    const strNumber = phoneNumber.toString();
    if (strNumber.startsWith("0", 0)) {
      return true;
    } else {
      return false;
    }
  }
  checkEmptySpaceInPhoneNumber(phoneNumber) {
    const strNumber = phoneNumber.toString();
    if (strNumber.includes(" ")) {
      return false;
    } else {
      return true;
    }
  }
  checkStringInPhoneNumber(phoneNumber) {
    const strNumber = phoneNumber.toString();
    const digits_only = (string) =>
      [...string].every((c) => "0123456789".includes(c));

    if (digits_only(strNumber) === true) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new ValidatePhoneNumber();
