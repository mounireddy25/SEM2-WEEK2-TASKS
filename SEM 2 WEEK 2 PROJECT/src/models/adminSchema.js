const mongoose=require('mongoose');

const adminschema=new mongoose.Schema({
    username:{
        type: String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    }
},{timestamps:false});
const admin=mongoose.model('adminlogin',adminschema);
module.exports=admin;