class ValidateNames {
  checkNames(names) {
    if (names == " " || names.length < 3) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = new ValidateNames();
