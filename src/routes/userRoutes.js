const express = require('express');
const userCtrl =require('../controllers/userCtrl')
const router =express.Router();


router.post('/register',userCtrl.registerController)
router.post('/login',userCtrl.loginController)

module.exports=router;