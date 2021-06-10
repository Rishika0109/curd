const express=require('express');
const router=require('./routes/auth');
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000);
app.use(router);