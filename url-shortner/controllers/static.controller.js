const urlModels = require('../models/urls.model')

async function hendelAdmin(req, res) {
      const allUrls = await urlModels.find({ })
      return res.render('home', {
            urls: allUrls
      })
}

async function hendelHomePage(req, res) {
      const allUrls = await urlModels.find({ createdBy: req.user._id })
      return res.render('home', {
            urls: allUrls
      })
}

async function hendelSignupPage(req, res) {
      return res.render('signup')
}

async function hendelLoginPage(req, res) {
      return res.render('login')
}

module.exports = { hendelAdmin, hendelHomePage, hendelSignupPage, hendelLoginPage }