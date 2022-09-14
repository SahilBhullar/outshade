const eventCollection = require("../Model/eventSchema");

const createEvent = async (req, res) => {
  try {
    const data = req.body;
    const eventdata = new eventCollection(data);
    await eventdata.save();
    res
      .status(201)
      .send({ status: true, msg: "Event Created", eventdetail: eventdata });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: error + "Internal event error" });
  }
};
module.exports = createEvent;
