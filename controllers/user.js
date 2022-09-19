const User = require("../models/user");

class Users {
  async getUsers(req, res) {
    try {
      const users = await User.find({}).exec();
      return res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async addUsers() {
    // try {
    //     const updatedCitizen = await CitizenM.findOneAndUpdate({ username: username }, { status: status_id }, { new: true });
    //     // let ans = await Status.f.getStatus()
    //     return updatedCitizen.getStatus(updatedCitizen.status).status_name
    // } catch (e) {
    //     return false
    // }
  }
}

module.exports = new Users();
