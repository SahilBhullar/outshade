const UserCollection = require("../Model/userSchema");


const login = aysnc(req, res)  => {
    try {
        const data = req.body;
        const { email, password } = data;

        const findUser = await UserCollection.findone({
            email, password
        })

        if (!findUser) {
            return res.status(404).send({
                status: false, msg: "User Not Found"
            })
        }





        res.status(200).send({
            status: true, msg: "User Login Successfully"
        })




    } catch (error) {
        return res.status(500).send({
            status: false, msg: error + "Internal login api error"
        })
    }
}