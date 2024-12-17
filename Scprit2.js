console.log("Radha Radha");

// //for loop
// for(let count=1 ;count<=10; count++){
//     console.log("Anish you can do any thing in a world")
// }

// for(let i=1 ; i<=10; i++){
//     console.log("i =", i);
// }

// //calculate the sum of the nth numbers.
// let sum = 10;
// for(let i=1; i<=8;i++){
//     sum = sum +i;
// }
// console.log("sum =" ,sum);

// //while loop
// let j = 0;
// while(j<=10){
//     console.log("j = " ,j);
//     j++;
// }

// //do while loop
// let p = 10;
// do{
//     console.log("Ronak kumar goyal");
//     p++;
// }while(p<=4);

// //for of loop
// let d = "AnishTamoli"; 
// let length = 0;
// for(let i of d){
//     console.log("i = " ,i);
//     length++;
// }
// console.log("length of d =" , length);
// //for in loop
// let student = {
//     name: "Ronak Kumar Goyal",
//     age : 18,
//     cgpa :9.8,
//     ispass:true,
// }
// for(let val in student){
//     console.log("val =" ,val , "output =" ,student[val]);
// }

//Question Practics 1


for(let num=0;num<=100 ;num++ ){
    if(num%2 == 0){
        console.log(num);
    }
}

//Question Practics 2

// let Gamenumber = 30;
// let usernumber = prompt("Enter your gamenumber.");
// while(usernumber!=Gamenumber){
//     usernumber=prompt("Sorry you enter wrong gamenumber")
// }
// console.log("Conguralation you enter the right gamenumber");

//string

let str = "Viratsharma";
console.log(str);
console.log(str.length);
console.log(str[5]);

//Tremplate Literals
let input={
    fullname : "Anish Tamoli",
    age : 19,
    Place :"Jaipur",
};

let output =`This is the detalils ${input.fullname} and ${input.age} and the live location ${input.Place}`

console.log(output);

let specalstring = `This is my Tremplate Literals`;
console.log(specalstring);

//Escape charactrics
// /n and /t

let pre = "Apan  Collage"
pre3=pre.toUpperCase();
pre4=pre.toLowerCase();
console.log(pre);
console.log(pre3);
console.log(pre4);

let udarn = "        First    Year  Student are great.";
console.log(udarn.trim());

let ashu = "helloworld"
console.log(ashu.slice(2,6));

let ashi = "Viratsharma"
console.log(ashu.concat(ashi));
console.log(ashi.replace("s" , "d"));
console.log(ashi[7]);

//Practics question
let enter = prompt("Enter your fullname");
console.log(enter);
let input1 = "@";

console.log(input1.concat(enter) + 125);

//third Turitual
console.log("Jai Mahakal");

let marks = [25,60,50,78,96,100];
console.log(marks);
console.log(marks.length);
console.log(marks[5]=25);

for(let i=0;i<marks.length ;i++){
    console.log("marks of students =" ,marks[i]);
}

let cricket_kit = ["bat" ,"ball"];
console.log(cricket_kit);
console.log(cricket_kit.length);
console.log(typeof cricket_kit);

let cities = ["delhi","jaipur","bombay","gudagam","goa"]
for (const p of cities) {
    console.log(p.toUpperCase());
}
console.log("Jai Mahakal");

let marks = [25,60,50,78,96,100];
console.log(marks);
console.log(marks.length);
console.log(marks[5]=25);

for(let i=0;i<marks.length ;i++){
    console.log("marks of students =" ,marks[i]);
}

let cricket_kit = ["bat" ,"ball"];
console.log(cricket_kit);
console.log(cricket_kit.length);
console.log(typeof cricket_kit);

let cities = ["delhi","jaipur","bombay","gudagam","goa"]
for (const p of cities) {
    console.log(p.toUpperCase());
}

//Practics Question 1.
let result = [85,25,60,80,90,99];
let box = 0;
for (const val of result) {
    box += val ;
}
console.log( "Average of result of class student = " ,box/6);

//Practics Question 2.
let price = [250,600,850,963,720,4569];
let a = 0;
for (const input of price) {
    console.log(`the price of items ${a} = ${input}`);
    let offer = input/10;
    price[a] = price[a] - offer;
    console.log(`price after discount  = ${price[a]}`);
    a++;
}

let food =["Apple" ,"Banana" ,"mango" ,"orange" ,"whatermelon"];
food.push("tamato" ,"naspaty");
console.log(food);

food.pop();
console.log(food);

console.log(food.toString());

let batman = ["Virat Kholi" ,"Rohit Sharma" ,"Shuman Gill" ,"Klrahul" ,"Sachin"]

let ball = ["Shami" ,"Jadija" ,"Bhumara" ,"shiraja"]
// let team = batman.concat(ball);
// let team = batman.unshift("pant");
let team = batman.shift();
console.log(team);

let num = [25,60,1,22,90];
console.log(num.slice(1,3));
console.log(num.splice(2,2,102,2005));
console.log(num);

//Practics Question 3



