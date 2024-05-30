const express=require('express');
const router=express.Router();
const {registeruser,authuser} =require('../controllers/usercontroller')
router.route('/').post(registeruser);
router.post('/login',authuser);
module.exports=router;