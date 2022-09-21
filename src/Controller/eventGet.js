const eventCollection=require("../Model/eventSchema")

const eventDetails=async(req,res)=>{
    try {
        
const query = req.query;
const { title, description } = query;
const alldetails=await eventCollection.findOne(query)
return res.status(200).send({satus:true,msg:"Event Details Get Successfully",data:alldetails})


    } catch (error) {
        return res.status(500).send({status:false,msg:error + " "+"GetEventDetails Api Internal Error"})    }

}
module.exports=eventDetails