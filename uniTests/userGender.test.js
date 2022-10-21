const userGenderValidator = require("../utilities/validateGender");

test("Test if the gender passed is valid", () => {
  const gender = "Male";
  const validatedGender = userGenderValidator.checkGender(gender);

  expect(validatedGender).toBeTruthy();
});

test("Test if the gender passed is valid", () => {
  const gender = "Female";
  const validatedGender = userGenderValidator.checkGender(gender);

  expect(validatedGender).toBeTruthy();
});

test("Test if the gender passed is valid", () => {
  const gender = "Mal";
  const validatedGender = userGenderValidator.checkGender(gender);

  expect(validatedGender).toBeFalsy();
});

test("Test if the gender passed is valid", () => {
  const gender = "Feale";
  const validatedGender = userGenderValidator.checkGender(gender);

  expect(validatedGender).toBeFalsy();
});
