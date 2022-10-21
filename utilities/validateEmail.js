class ValidateEmail {
  validateEmail(email) {
    const mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new ValidateEmail();
