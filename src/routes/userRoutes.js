const express = require('express');
const router =express.Router();
const userCtrl =require('../controllers/userCtrl')
const authMiddleware =require('../middlewares/authMiddleware');


router.post('/register',userCtrl.registerController)
router.post('/login',userCtrl.loginController)

router.post('/getUserData',authMiddleware,userCtrl.authController)

module.exports=router;