const userNidValidator = require("../utilities/validateNid");

test("Test if the nid passed is valid", () => {
  const nid = "1199784515212458";
  const validateNid = userNidValidator.checkNidLength(nid);

  expect(validateNid).toBeTruthy();
});

test("Test if the nid passed is valid", () => {
  const nid = "11997845152124";
  const validateNid = userNidValidator.checkGender(nid);

  expect(validateNid).toBeFalsy();
});

test("Test if the nid passed is valid", () => {
  const nid = "1199784515212458";
  const validateNid = userNidValidator.checkStartsOfNid(nid);

  expect(validateNid).toBeTruthy();
});

test("Test if the nid passed is valid", () => {
  const nid = "2199784515212458";
  const validateNid = userNidValidator.checkGender(nid);

  expect(validateNid).toBeFalsy();
});
