const userEmailValidator = require("../utilities/validateEmail");

test("Test if the email passed is valid", () => {
  const email = "yves21@gmail.com";
  const validatedEmail = userEmailValidator.checkemail(email);

  expect(validatedEmail).toBeTruthy();
});

test("Test if the email passed is valid", () => {
  const email = "byiringiroyves127@gmail.com";
  const validatedEmail = userEmailValidator.checkemail(email);

  expect(validatedEmail).toBeTruthy();
});

test("Test if the email passed is valid", () => {
  const email = "byives21gmail.com";
  const validatedEmail = userEmailValidator.checkemail(email);

  expect(validatedEmail).toBeFalsy();
});
