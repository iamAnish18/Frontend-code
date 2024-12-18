console.log("Radha -Krisha");

function myfunction(){
    console.log("This is my first function to remove the tendency of code.");
    console.log("After learnging the java scprit i will go to the react js.")
}

myfunction();

//sum function.
function sum(a,b,c){
    console.log(a+b-c);
}

sum(6,100,150);

//sum using return.
function sun(x,y,z){
    s = x+y+z;
    return s;
}
let value = sun(10,50,40);
console.log(value);

//using arrow function.
 function ashu(p,q){
    A=p/q;
    return A;
 }
let count=(p,q)=>{
    console.log(p/q);
}
count(8,2);

function another(u,t){
    m=u**t;
    return m;
}

let count2=(u,t)=>{
    console.log(u**t);
}
console.log(2**8);

//Practics question 1.
function virat(str) {
    let box = 0;
    for (const inp of str) {
        if (inp === "a" || inp === "e" || inp === "i" || inp === "o" || inp === "u") {
            box++;
        }
    }
    console.log("This is my vowel number =", box);
}

virat("Anish tamoli");

//using the arrow to solve the practics question 1.
let gill = (pre)=>{
    let box2 = 0;
    for (const input of pre) {
        if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
            box2++;
        }
    }
    console.log("This is my vowel number =", box2);
}
gill("aashi");

//for each loop
let arr = [10,20,15,30];

arr.forEach(function(element,index,arr){
    console.log(`This is the element of the arr ${element} and the index is ${index} ${arr}`);
});

//practics question 3.
let num = [1,2,3,4,5,6];
num.forEach(function(num){
    console.log(num*num)
});

//map method of array
let udarn = [1,5,6,9,8,10];
let ice = udarn.map((valn) =>{
    return valn*2;
});

console.log(ice);
//filter method of array
let mom = [1,2,3,4,5,6,8,10,12,18];

let eve = mom.filter((val)=>{
    return val%2===0;
});
console.log(eve);
//Reduce method of array.
let add = [1,2,3,4,5,6];
let added = add.reduce((res,curr)=>{
    return res+curr;
});
console.log(added);

//to find the large number
let great = add.reduce((pre,curr)=>{
    return pre>curr ? pre : curr;
});
console.log(great);

//Practics question 4.
let studentnum = [50,60,80,90,98,99,91.5,105];
let topper = studentnum.filter((nice)=>{
    return nice>90 && nice<=100;
});
console.log(topper);

//Practics question 5.
//Prompt are using only browzer.
let n = prompt("Enter your number....");
let arre =[];
for(let i=1;i<=n;i++){
    arre[i-1]=i;
}
console.log(arr);

let ad = arre.reduce((result,current)=>{
    return result+current;
})
console.log(ad);

let ud = arre.reduce((result,current)=>{
    return result*current;
});
console.log(ud);
