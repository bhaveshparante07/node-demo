const jwt = require('jsonwebtoken')
const secretKey = "Bhavesh$@2002"

function setUser(user){
      // sessionIdToUserMap.set(id, user);
      return jwt.sign({
            _id: user._id,
            email: user.email,
            role: user.role
      }, secretKey)
}

function getUser(toket){
      if(!toket) return null
      return jwt.verify(toket, secretKey)
}

module.exports = {
      setUser,
      getUser
}