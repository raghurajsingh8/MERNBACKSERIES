const express=require('express')
const app=express();
const path=require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
  res.render("index.ejs")
})


// dynamic routingg
app.get('/profile/:username',function(req,res){
  
  res.send(`wlecome ${req.params.username}`);
})

app.get('/profile/:username/:authorage',function(req,res){
  
  res.send(`wlecome ${req.params.username} you are ${req.params.authorage} year old1 ${req.params}`); 
})


app.listen(3000,function(){
  console.log("Server Started")
})