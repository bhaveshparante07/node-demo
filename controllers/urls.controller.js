const shortId = require('shortid')
const urlModels = require('../models/urls.model')

async function hendelGenrateNewShortId(req, res) {
      const body = req.body;
      if (!body.url) return res.status(400).json({ error: "Url is requird" })
      const shortID = shortId()
      await urlModels.create({
            shortId: shortID,
            redirectUrl: body.url,
            visiteHistory: [],
            createdBy: req.user._id
      })

      const allUrls = await urlModels.find({})

      return res.redirect('/')
      // return res.json({ id: shortID })
}

async function handelUrlRedirect(req, res) {
      const shortId = req.params.shortId;

      const data = await urlModels.findOneAndUpdate({
            shortId
      }, {
            $push: {
                  visiteHistory: {
                        timestamp: Date.now()
                  }
            }
      });
      return res.redirect(data.redirectUrl)

}

async function handelUrlAnalytics(req, res) {
      const shortId = req.params.shortId;
      const data = await urlModels.findOne({ shortId });
      return res.json({ status: 'Success', count: data.visiteHistory.length })
}

module.exports = { hendelGenrateNewShortId, handelUrlRedirect, handelUrlAnalytics }