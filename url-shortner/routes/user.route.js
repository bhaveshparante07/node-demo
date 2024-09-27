const express = require('express');
const userController = require('../controllers/user.controller')

const router = express.Router();

router.post('/', userController.handelUserSignup)
router.post('/login', userController.handelUserLogin)

module.exports = router