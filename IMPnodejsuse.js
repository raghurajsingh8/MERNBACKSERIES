const fs = require('fs');

// we have to study 

// writefile 
// appendfile 
// copyfile 
// rename 
// unlink 

// file bnakar data dalne ke liye
fs.writeFile("hey.txt","this is data of hey.txt file ",function(err){
  if(err) console.log(err);
  else console.log("done");
})

// terminal me node Script.js(file name likhte hai )
// terminal me output me done aayega aur hey.txt file bhi bn jayegi 


// likhe hue conten tme aage ka content
fs.appendFile("hey.txt","aage ka content by append file ",function(err){
  if(err) console.log(err);
  else console.log("done");
})

fs.rename("hey.txt","yrr.txt", function(err){
  if(err) console.log(err);
  else console.log("done");
})
// copyfile 
fs.copyFile("helloyrr.txt","./copy/copy.txt",function(err){
  if(err) console.log(err);
  else console.log("done");
})
// err ke jagah err.message bhi de skyte h


// file ko delete krna fs.unlink 

fs.unlink("yrr.txt",function(err){
  if(err) console.log(err);
  else console.log("removed");
})


// blank folder dekete krne ke liye

fs.rmdir("./expe",function(err){
  if(err) console.log(err);
  else console.log("removedfold");  
})

//  remove folder which is not empty
fs.rm("./copy",{recursive:true},function(err){
  if(err) console.log(err);
  else console.log("removedfold");  
})



// creating server *******************
const http=require('http');
const server = http.createServer(function(req,res){
  res.end("hello world");

})

server.listen(3000);
