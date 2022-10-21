class ValidateGender {
  checkGender(gender) {
    if (gender == "Male") return true;
    else if (gender == "male") return true;
    else if (gender == "Female") return true;
    else if (gender == "female") return true;
    else return false;
  }
}

module.exports = new ValidateGender();
