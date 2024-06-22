npm init -y terminal me package.json bn jayega 
initialize a project with npm 
index.js bna lenge 
install express


dynamic routing learn 

 dynamic routing  

how to get data coming from frontend at backend route 

setting up parsers for form :-port 3000 pr chal gya vhi parsar h using 

app.use(express.json());
app.use(express.urlencoded({extended:true}))

lines 


setting up ejs for ejs pages
install ejs from npm 
setup ejs as a view engine 
app.set('view engine','ejs');

create folder views 
views hi rakhenge naam usme path salreasy set h usme html/ejf file bnayenge aur file naam likhenge to route pr vo page khul jayega 



ejs=exact html u can use calculation 




setting up public static files

want tu usee html css js 
app.use(express.static(path.join(__durname,'public')));


console.log(__dirname)==>C:\Users\raghu\OneDrive\Desktop\backenddomination\project1


use tailwind

  <script src="https://cdn.tailwindcss.com"></script>



________________________________________________________
dynaimc routing 

hum log kai baar kuch routes dekkhte hai unmeh sirf ek hi hissa change gh ota hai 

/author/harshita
/author/raghu
/author/vishnupriyasingh

/profile/sahaura
/profile/lapani
/profile/harshita

so dynamic route theres come

approach
phle browsre pr jao
ur;l likho jo aapko chahiye aur enter dabaiye aur ab us url ko create kriye 
res bhejo kuch bhi 

ab ise dynamic bnane ke liye /profile/alwayschange

dynamic part mein : lga denge route me 

app.get('/profile/:raghu',function(req,res){
  res.send("hello raghu ")
})

ab raghu is variable 

app.get('/profile/:username',function(req,res){
  
  res.send(req.params.username);
})

req.params ka matlab h-> : 