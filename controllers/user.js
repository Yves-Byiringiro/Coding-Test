const User = require("../models/user");
const fileHandler = require("../utilities/handleFile");
const userGenderValidator = require("../utilities/validateGender");
const userNameValidator = require("../utilities/validateNames");
const userNidValidator = require("../utilities/validateNid");
const userPhoneNumberValidator = require("../utilities/validatePhoneNumber");
const userEmailValidator = require("../utilities/validateEmail");

class Users {
  async getUsers(req, res) {
    try {
      const users = await User.find({}).exec();

      return res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async addUsers(req, res) {
    try {
      if (req.files === undefined) {
        return res.status(400).send("Please upload an excel file!");
      }
      const fileData = req.files.file.data;
      const file = fileHandler(fileData);

      let user;

      file.map(async (singleUser) => {
        user = new User({
          names: !userNameValidator.checkNames(singleUser.A)
            ? singleUser.A + " - " + "Invalid"
            : singleUser.A,
          nid:
            !userNidValidator.checkEmptySpaceInNid(singleUser.B) ||
            !userNidValidator.checkNidLength(singleUser.B) ||
            !userNidValidator.checkStartsOfNid(singleUser.B) ||
            !userNidValidator.checkStringInNid(singleUser.B)
              ? singleUser.B + " - " + "Invalid"
              : singleUser.B,
          phoneNumber:
            !userPhoneNumberValidator.checkPhoneNumberLength(singleUser.C) ||
            !userPhoneNumberValidator.checkStartsOfPhoneNumber(singleUser.C) ||
            !userPhoneNumberValidator.checkStringInPhoneNumber(singleUser.C) ||
            !userPhoneNumberValidator.checkEmptySpaceInPhoneNumber(singleUser.C)
              ? singleUser.C + " - " + "Invalid"
              : singleUser.C,
          gender: !userGenderValidator.checkGender(singleUser.D)
            ? singleUser.D + " - " + "Invalid"
            : singleUser.D,
          email: !userEmailValidator.validateEmail(singleUser.E)
            ? singleUser.E + " - " + "Invalid"
            : singleUser.E,
        });

        await user.save();
      });

      return res.status(200).send("File has been uploaded successfully!");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

module.exports = new Users();
