const express = require("express");
const router=express.Router()
const authMiddleware= require('../middleware/Auth')
const PasswordCtrl = require('../Controllers/PasswordCtrl')
const PasswordAdminCtrl = require('../Controllers/PasswordAdminCtrl')

router.post('/hash-check',PasswordCtrl.checkHash)
router.get('/mockup',PasswordCtrl.mockup)
router.post('/admin/update-password-db',PasswordAdminCtrl.updateDb)

module.exports = router; 
