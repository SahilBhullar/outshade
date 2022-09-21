const jwt=require("jsonwebtoken")

const UserCollection = require("../Model/userSchema")


const login= async(req, res)  => {
    try {
        const data = req.body;
        const { email, password } = data;

        const findUser = await UserCollection.findOne({
            email, password
        })

        if (!findUser) {
            return res.status(404).send({
                status: false, msg: "User Not Found"
            })
        }

  const token =jwt.sign({
    userId:findUser._id,
    email:findUser.email
  },"sahil")

        res.header("key",token);


        res.status(200).send({
            status: true, msg: "User Login Successfully",token:token
        })




    } catch (error) {
        return res.status(500).send({
            status: false, msg: error + "Internal login api error"
        })
    }
}
module.exports=login