const User=require('../model/user');
const mon=require('../db/compass');
const create=(req,res)=>{
    const user=new User(req.body);
    user.save()
    .then((data)=>{
        res.send('data is saved to db');
    });
};
const del =(req,res)=>{
    const id=req.params.id;
    User.findOneAndDelete({id})
    .then((data)=>{
        res.send('data is  deleted');
    });

};
const up =(req,res)=>{
    const id=req.params.id;
    User.findOneAndUpdate({id},{$set:{fname:'saikat'}},{new:true},(err,data)=>{
        if(err)
        {console.log(err);}
        else
        {console.log('rishika');}
    })
    .then((data)=>{
        res.send('data is  updated');
    });

};
module.exports={
    create,
    del,
    up
};