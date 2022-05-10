const express = require("express");
const router=express.Router()
const authCrl = require('../Controllers/AuthCtrl')

router.post('/signup', authCrl.signup)
router.post('/login',authCrl.login)

module.exports = router; 
