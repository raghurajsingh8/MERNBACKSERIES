const express=require('express')
const app=express();
const path=require('path');

const fs=require('fs');
const { log } = require('console');

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public'))); 



app.get('/',function(req,res){
  fs.readdir('./files',function(err,files){
    
  res.render("index.ejs",{
    files:files});
    
  })

})




app.get('/file/:filename',function(req,res){
  
fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
   res.render('show.ejs',{
    
    filename:req.params.filename,
    filedata:filedata});
  
})
})



app.get('/edit/:filename',function(req,res){
  res.render('edit',{filename:req.params.filename});


  
  })

  app.post('/edit', function(req, res) {
    const previousFile = `./files/${req.body.previous}`.trim();
    const newFile = `./files/${req.body.new}`.trim();
  
    console.log('Previous file:', previousFile);
    console.log('New file:', newFile);
  
    fs.rename(previousFile, newFile, function(err) {
      if (err) {
        console.error('Error renaming file:', err);
        return res.status(500).send('Error renaming file');
      }
      console.log("File renamed successfully");
      res.redirect('/');
    });
  });


  app.post('/create',function(req,res){
    
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
      if(err) console.log(err);
      else console.log("done");
      res.redirect('/')
    },
    
  )
  

})



app.listen(3000);