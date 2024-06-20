// saari chij express ki const exprss me aa gyi isse
const express = require('express')
// express ek const h lekin isme ek function stor hai isliye its work like function 

// const app me express ka sara data h jisse kuch create kr skte hai 
const app = express()

// route create krna  domains ke baad ki saaari chije facebook.com/profile   


// app .get se route create kr skte hai (route,request handler  )

// request handle is middleaware  function req res  ** 


// routing me .profile .cash .login yhi hota hia 


app.get('/', function (req, res) {
  res.send('Hello World kya haal chal badhia bhai ')
})

app.get('/profile', function (req, res) {
  res.send('pta nhi kyo mera nhi ho rha hai hm nhi khe te sb gadbad hai  baat ko kaisde ghumana ja rha hai dekh rha hai vindo Hello World kya haal chal badhia profile kyo dekh rha bhai  bhai ')
})

// port dete hai app.listen se 
app.listen(3000)


// agar koi change kre to server fir se restart krna hota hai isse bacne ke liye live kr liye pacjaga install kro

// npm i nodemon -g

// mere me kaam nhi kr rha hai 


// middle ware code 

// do tarah se use krenge
// pahla 
// app.use(function(req,res,next));
// next lgate h aur call bhi krte h taaki kaam hone ke baad next ja ske rote pr
// koi bhi request aaye phle isee chalao phir route pr jao