const { getUser } = require('../service/auth')

function checkForAuthontication(req, res, next){
      // const authorizationHeaderValue = req.headers['authorization'];
      const token = req.cookies?.uid;
      req.user = null;

      if(!token) return next();
      
      // const token = authorizationHeaderValue.split('Bearer ')[1];
      const user = getUser(token);
      req.user = user;

      return next();
}

function restrictTo(roles){
      return function(req, res, next){
            if(!req.user) return res.redirect("/login");

            if(!roles.includes(req.user.role)) return res.end("unAuthorization");

            return next();
      }
}

module.exports = {
      checkForAuthontication,
      restrictTo
}