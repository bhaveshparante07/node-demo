const express = require('express')
const staticController = require('../controllers/static.controller')

const {restrictTo} = require('../middelwares/auth')

const router = express.Router();

router.get('/admin/urls', restrictTo(["ADMIN"]), staticController.hendelAdmin)

router.get('/', restrictTo(["NORMAL", "ADMIN"]), staticController.hendelHomePage)

router.get('/signup', staticController.hendelSignupPage)

router.get('/login', staticController.hendelLoginPage)



module.exports = router;