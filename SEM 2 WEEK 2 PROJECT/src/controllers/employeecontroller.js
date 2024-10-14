const bcrypt=require('bcrypt');
//const schema=require('../models/adminSchema');

const signup=async(username,password)=>{
    console.log(1);
    const existingAdmin=await schema.findOne({username});
    if(existingAdmin){
        throw new Error('Admin with the username already exist');
    }
    const hashPassword= await bcrypt.hash(password,10);
    const newAdmin= new schema({username:username,password:hashPassword});
    const saveAdmin=await newAdmin.save();
    console.log(saveAdmin);
    return saveAdmin;
}
const login=async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await schema.findOne({username});
        const ispasswordcorrect=await bcrypt.compare(password,user?.password||'');
        if(!user||!ispasswordcorrect){
            return res.status(400).json({success:false,error:'Invalid username or password'});
        }
        generatetokensetcookie(user._id,res);
        console.log("Admin logged in ",user);
        res.status(200).json({success:true,username:user.username});
    }
    catch(error){
        console.log('Error',error);
        res.status(500).json({success:false,error:'internal server error'});
    }
}
const logout=async(req,res)=>{
    try{
        console.log('Admin logout');
        res.cookie('jwt','',{maxAge:0});
        res.status(200).json({message:'logged out successfully'});
    }
    catch(error)
    {
        console.log('error in login controllers',error.message);
        res.status(500).json({error:'internal server error'})
    }
}
module.exports={login,logout,signup}
