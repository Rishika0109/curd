const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const db=new Schema({
    fname:{type:String, required:true},
    age:{type:Number, required:true},
    lname:{type:String, required:true}
})
const User=mongoose.model('User', db )
module.exports=User;