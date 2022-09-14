const UserCollection = require("../Model/userSchema");

const createuser = async (req, res) => {
  try {
    const data = req.body;
    const user = new UserCollection(data);
    await user.save();
    res.status(201).send({ status: true, msg: "User Created",userDetail:user });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: error + "Internal error" });
  }
};
module.exports = createuser;
