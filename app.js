// ORM ODM 
// Moongose is ODM

const express=require('express');
const app=express();
const userModel = require('./usermodel')



app.get('/',(req , res) =>{


  res.send("hey");
})


// this (sasra moongose ka)is asyncronous code baad me chalega
// phle chalane ke liye async await lgayenge 
app.get('/create', async (req , res) =>{

  let createuser =  await  userModel.create({name:"raghu",
    email:"raghu@123",
    password:"1234",
    age:23,
    gender:"male",
    city:"pune",
    state:"maharashtra"})

    res.send(createuser);

    //  id 24bit ka hexadecimal ni aur  -v krke 2 extra chij aaayegi 


})

app.get('/update', async (req , res) =>{

   let updateuser = await userModel.findOneAndUpdate({name:"raghu"},{name:"raghuraj singh"},{new:true})

    res.send(updateuser);

    //  id 24bit ka hexadecimal ni aur  -v krke 2 extra chij aaayegi 


})

app.get("/read",async (req,res)=>{
  let users = await userModel.find({name:"raghu"});
  res.send(users);
  
})

app.get("/reada",async (req,res)=>{
  let users = await userModel.find();
  res.send(users);
  
})

app.get('/delete',async(req,res)=>{

  let deleteuser = await userModel.findOneAndDelete({name:"raghu"});
  res.send(deleteuser);
})

// find array dega findone object dega


app.listen(3000)


// id me suruaat ke 3 bytes time stamp btata hai
// baki machine infromration hota hai  