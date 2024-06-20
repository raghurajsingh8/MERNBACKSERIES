const express=require('express')
const app=express()
var a=0;
app.use(function(req,res,next){
  a++;
  console.log("yhi h middleware 0"+ {a});
  next();
})
app.use(function(req,res,next){
  a++;
  console.log("yhi h middleware1"+ {a});
  next();
})

app.get('/',function(req,res){
  a++;
  res.send("Hello World2" +{a})
})
app.use(function(req,res,next){
  a++;
  console.log("yhi h middleware3"+{a});
  next();
})

app.get('/cute',function(req,res){
  a++;
  res.send("Hello Worl4"+{a})
})
app.listen(3000)

// jis route ko call kra rha use middleware ko call ho jayega har route se phle middle ware uske liye btana hoga 


// error handling
app.use(function(err,req,res,next){
  console.log(err);
})
