const mongoose=require('mongoose');
const url='mongodb+srv://rishika0109:rishika@rishika.hvqia.mongodb.net/rishika?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
.then((data)=>{
console.log('connected to database');
})
.catch((err)=>{
    console.log(err);
})
