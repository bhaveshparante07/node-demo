const express = require('express')
const urlControllers = require('../controllers/urls.controller')

const router = express.Router();

router.post('/', urlControllers.hendelGenrateNewShortId)

router.get('/:shortId', urlControllers.handelUrlRedirect)

router.get('/analytics/:shortId', urlControllers.handelUrlAnalytics)


module.exports = router;