const UserCollection = require("../Model/userSchema");

const updateUser = async (req, res) => {
  const id = req.params._id;
  const dataToUpdate = req.body;
  const update = await UserCollection.findOneAndUpdate(id, dataToUpdate, {
    new: true,
  });
  res.status(200).send({
    status: true,
    msg: "User Updated",
    updateDetail: update,
  });
};
module.exports = updateUser;
