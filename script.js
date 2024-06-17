// fundamentals of javascript
// arrasy and object
//  function returns
// async js coding 

// ARRAYS [1,2,3,4,5,56]
var arr=[1,2,3,4]
// foreach map filter find index0f

// foreach :-har member me kuch update krna hai to ye keval is function ke lie hoga hmesa ke lie nhi used for print values
console.log("foreach");
arr.forEach(function(val){
  val=val+1;
  console.log(val);
})


// map
var arr2=[1,2,3,4] ;
// want arr2[5,6,7,8]  sbme 4 jood do 
// calculation for each element
// and give newarray purana array vaisa hi rhega nayea array me change kran hai 
console.log("map");
 var newa = arr2.map(function(val){
   return val*3
 })
 console.log(newa);

//  filter
console.log("filter");
arr3=[1,2,3,4,5,6,7,8,9,10,1,1,1,1]
var newarr=arr3.filter(function(val){
  return val%2==1
})
console.log(newarr);
console.log("filter");
console.log(newarr.length);
arr4=[1,2,3,4,5,6,7,8,9,10]
var newarr2=arr4.filter(function(val){
  if(val > 3){
    return true
  }
  return false
})
console.log(newarr2);
// indexof hai ya nhi ye btaiyaga hai to kha hai otherwise -1 
console.log("indexof");
a=[2,32,23,23,23,232,32,32,323,23,34,3,44,55,6]
var out=a.indexOf(1212) 
var put=a.indexOf(23)
console.log(out)
console.log(put);

// arrays and objects

var obj={
  name:"raghu",
  age:23,
  city:"bengaluru", 
}
Object.freeze(obj);
obj.age=32;
console.log(obj.name)
console.log(obj.age)

// function name . length krenge to vo no of parameter batayeaga

// asncronyous javascript 
// line by line code chale is kahte hai syncronoys


//  jo bhi code asynchronous nature ka ho use side stack kr do aur agle code ko chalao jab sara synchode chal jaye tb asynch code agar complete nhi hua h to vo chalega 

async function fun(){
 var blob=await fetch(`https://randomuser.me/api/`);
 var ans4=await blob.json();
 console.log(ans4.results[0].name);
}

fun();