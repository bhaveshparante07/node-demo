const { v4: uuidv4 } = require('uuid')
const User = require('../models/user.model')
const { setUser } = require('../service/auth')

async function handelUserSignup(req, res) {
      const { name, email, password } = req.body;

      await User.create({
            name,
            email,
            password
      })
      return res.render('home')
}

async function handelUserLogin(req, res) {
      const { email, password } = req.body;

      const data = await User.findOne({ email, password })

      if (!data) return res.render('login', { status: false, error: "Email Id Or Password Wrong" })

      const tokan = setUser(data)
      
      res.cookie('uid', tokan)

      return res.redirect('/')
      // return res.json({tokan})
}

module.exports = {
      handelUserSignup,
      handelUserLogin
}