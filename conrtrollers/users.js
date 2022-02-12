const User = require("../schema/users")
const getUsers = async (req, res) => {
    try {
      const users = await User.find({});
      res.send({ success: true, data: users });
    } catch (err) {
        res.send({ success: false, err: err });
    }
  };
  module.exports = {
    getUsers
  }