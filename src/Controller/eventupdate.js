const { default: mongoose } = require("mongoose");
const eventCollection = require("../Model/eventSchema");

const isValid= function(objectId){
  return mongoose.Types.ObjectId.isValid(objectId)
}

const updateEvent = async (req, res) => {
  try {
     const id = req.params._id;
     const userId = req.params.userId
    //  if(!isValid(id)){
    //   return res.status(404).send({status:false,messege:"id is not correct"})
    //  }
    console.log(req.userId)

     const dataToUpdate = req.body;

     const updateEvent = await eventCollection.findOneAndUpdate(
       id,
       dataToUpdate,
       {
         new: true,
       }
     );
     res.status(200).send({
       status: true,
       msg: "User Updated",
       updateDetail: updateEvent,
     });
    
   
  } catch (error) {
    return res.status(500).send({
      status:false,
      msg:"eventUpdate Api internall error "+error
    })
  }
 
};
module.exports = updateEvent;
