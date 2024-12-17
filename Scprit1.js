console.log("Hello World!");
var a = 6;//This is the Global Varible.
let b = 10;//This is the block Varible.
const c = 12;//This is the constant Varible.

//Premative data type.
let x = 25;
let y = "anish"
let z = null
let p = undefined
let r = 0.25
let isfollow = true

console.log(x, y, z, p , r,isfollow)
console.log(typeof x, typeof y, typeof z, typeof p,  typeof r, typeof isfollow)


let pro ={
    name : "Anish Tamoli",
    age : 18,
    is_handsome:true
}
console.log(pro);
console.log(typeof pro);


//Assignment Operator
let l = "10";
let d = 10;

console.log("l+d" , l+=d)
console.log("l-d" , l-=d)
console.log("l*d" , l*=d)
console.log("l**d" , l**=d)
console.log("l/d" , l/=d)
console.log("l%d" , l%=d)

//Comparison Operators
console.log(l==d)
console.log(l!=d)
console.log(l===d)
console.log(l!==d)
console.log(l>d)
console.log(l<d)
console.log(l=>d)

//Logical Operators
let e =50
let t = "50"

//Condition Statement 
let age = 10;
if (age >18){
    console.log("You can drive a bike");
}
else if (age=10){
    console.log ("You can drive the cycle");
}
else if (age=15){
    console.log("You cannot drive bike but running in main road");
}
else {
    console.log("You can drive safe");
}

//if and else conditions
let green = "10";
if(green===10){
    console.log("You are green")
}
else{
    console.log("You are black")
}

//Terminal Operator
let pcd = 25;
let cdp = 70;

let dpd = cdp>pcd ? (cdp+pcd) : (pcd-cdp) ;
console.log(dpd)

//for loop
for(let i =0 ; i<=10 ; i++){
    console.log("this is my for loop code")
}
let A =10;
for(let i =0 ; i<=10 ; i++){
    console.log("A=",A+i)
}
let obj = {
    name:"Anish Tamoli",
    role:"programmer",
    company:"Samsung"
}

for (const key in obj) {
     const element = obj[key];
     console.log(key,element)
}

//while loop
let i =10
while(i<15){
    console.log(i),
    i++;
}
//Do while loop
let cc =100;
do{
    console.log(cc),
    a++;
}while(a<5); 

function place(name){
    console.log("This is my new function" + name)
    console.log("This is my new function" + name)
    console.log("This is my new function" + name)
}

place("Anish Tamoli")
place("Ronak Goyal")

function sum(p,q,r=12){
    // console.log(p+q)/
    return(p+q+r)
}

return1=sum(10,5)
return2=sum(70,0)
return3=sum(1,52)

console.log("This the sum of the number p,q and r is =" ,return1)
console.log("This the sum of the number p,q and r is =" ,return2)
console.log("This the sum of the number p,q and r is =" ,return3)
