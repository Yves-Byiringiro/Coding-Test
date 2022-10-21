const userPhoneNumberValidator = require("../utilities/validatePhoneNumber");

test("Test if the nid passed is valid", () => {
  const phoneNumber = "07816042563";
  const validatePhoneNumber =
    userPhoneNumberValidator.checkPhoneNumberLength(phoneNumber);

  expect(validatePhoneNumber).toBeTruthy();
});

test("Test if the nid passed is valid", () => {
  const phoneNumber = "078124587";
  const validatePhoneNumber =
    userPhoneNumberValidator.checkPhoneNumberLength(phoneNumber);

  expect(validatePhoneNumber).toBeFalsy();
});

test("Test if the nid passed is valid", () => {
  const phoneNumber = "0789654125";
  const validatePhoneNumber =
    userPhoneNumberValidator.checkStartsOfPhoneNumber(phoneNumber);

  expect(validatePhoneNumber).toBeTruthy();
});

test("Test if the nid passed is valid", () => {
  const phoneNumber = "2789654125";
  const validatePhoneNumber =
    userPhoneNumberValidator.checkStartsOfPhoneNumber(phoneNumber);

  expect(validatePhoneNumber).toBeFalsy();
});
