 const express=require('express');
 const app=express();
    //  ek form se username email jo data hm bhejte hai vo plain text par server ki mila blob which is not directly readable anb is cheej ko handle karna padega ki hum is pd paaye 

    // in do line ke vajah se data readbale ho jaata hai 
 app.use(express.json());
 app.use(express.urlencoded({extended:true}))

 app.get("/",function(req,res){
     res.send("Hello World")}) 

     app.listen(3000);


