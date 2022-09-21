const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
  try {
    
    let token = req.headers["key"];

    if (!token) {
      return res.status(403).send({
        status: false,
        msg: "Token is not present",
      });
    }

    let decodedToken = jwt.verify(
      token,
      "sahil"
  );
    if (!decodedToken) {
      return res.status(401).send({
        status: false,
        msg: "token is invalid",
      });

    
      
    }
      
    let modify = req.params._id;
      let loggedInUser = decodedToken._id;
      if (!modify == loggedInUser) {
        return res.status(404).send({
          status: false,
          msg: "You can't change because your id is not match with the token credientials",
        });
      }
      next();
  } catch (error) {
    return res.status(500).send({
      status: false,
      msg: error + " " + "Middleware Api error",
    });
  }
};

module.exports = middleware;
