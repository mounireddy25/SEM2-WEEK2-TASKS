const express=require('express');
const router=express.Router();
const authentication=require('../middleware/auth');
const {login,signup, logout}=require('../controllers/employeecontroller');
router.post('/login',authentication,login);
router.post('/logout',authentication,logout);
router.post('/signup',authentication,signup);
module.exports=router;