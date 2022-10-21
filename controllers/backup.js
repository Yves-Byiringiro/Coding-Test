const User = require("../models/user");
const fileHandler = require("../utilities/handleFile");
const userGenderValidator = require("../utilities/validateGender");
const userNameValidator = require("../utilities/validateNames");
const userNidValidator = require("../utilities/validateNid");
const userPhoneNumberValidator = require("../utilities/validatePhoneNumber");

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
      let canRecord = true;
      file.map(async (singleUser) => {
        if (!userNameValidator.checkNames(singleUser.A)) {
          canRecord = false;
        }
        if (
          !userNidValidator.checkEmptySpaceInNid(singleUser.B) ||
          !userNidValidator.checkNidLength(singleUser.B) ||
          !userNidValidator.checkStartsOfNid(singleUser.B) ||
          !userNidValidator.checkStringInNid(singleUser.B)
        ) {
          canRecord = false;
        }
        if (
          !userPhoneNumberValidator.checkPhoneNumberLength(singleUser.C) ||
          !userPhoneNumberValidator.checkStartsOfPhoneNumber(singleUser.C) ||
          !userPhoneNumberValidator.checkStringInPhoneNumber(singleUser.C) ||
          !userPhoneNumberValidator.checkEmptySpaceInPhoneNumber(singleUser.C)
        ) {
          canRecord = false;
        }
        if (!userGenderValidator.checkGender(singleUser.D)) canRecord = false;

        if (canRecord == true) {
          user = new User({
            names: singleUser.A,
            nid: singleUser.B,
            phoneNumber: singleUser.C,
            gender: singleUser.D,
            email: singleUser.E,
            // validity
          });

          await user.save();
        }
        canRecord = true;
      });

      return res.status(200).send("File has been uploaded successfully!");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

module.exports = new Users();
