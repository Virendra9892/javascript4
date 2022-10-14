console.log("Hey Virendra Good Morning !");
// var a = 10;


// greet();
// function greet(){
//     // console.log(a);
//     var a = 450;
// //    console.log(b);
//     function greet1(){
//         var b = 20;
//         console.log(a);
    
    
//     function greet2(){
//         //  console.log(b);
//          function greet3(){
//             console.log(b);
//          }
//          greet3();
//     }
//     greet2();
// }
// greet1();
// }


// greet();

// console.log(a);

// let a = 20;

// let a = 12;
// console.log(a);
// console.log(a);
// const a = 12;
// const a ;
// a = 12;
// console.log(a);

// let a = 12;
// var a = 23;
// console.log(a);

// let a = null;
// console.log(a);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   person.firstName = "Virendra";

// let obj = {Name: "Virendra"};
// // let obj1 ={Name: "Virendra"};

// let obj1 = obj;
// console.log(obj==obj1);

// let a = 10;
let b = 210;

b = "Virendra";
b = null;
b = true;
b = undefined;
b = BigInt(1) + BigInt(2); 
console.log(b);

// function sum(a,b){
//     let c = a + b;
//     console.log(c);
// }
// sum();

function sum(){
    // console.log(arguments)
    let total = 0;
      for(let value of arguments)
       
            total+=value;
            return total;
      
}
console.log(sum(1,2,3,4,15));

// function greet(){
//     for(let i = 0; i<5; i++)
//         console.log(i);
    
// }
// greet();

// function sub(...args){
//     return args.reduce((a,b)=>{return a-b});
// }
// console.log(sub(1119,96,711,2,3,4,233,12,23,23));

// function sum(a,b = 1,c){
//     return a + b + c;
// }
// console.log(sum(1,undefined,21));

// let str = "This Is Split Method In Javascript";
// console.log(str.split(" ",4));
// console.log(str.split("hi"));

// Callback Practice Set

// function disp(b){
//     console.log("Hey Virendra Good Evening.",b);
// }

// function disp1(b,a){
//     // console.log();
//     a(b);
// }
// disp1(101,disp)

//  Callback function as arrow function.

// function greet(b,a){
//        a(b);
// }
// greet(101,arrow = (b)=>{
//        console.log("Hey this is a callback function.",b);
// });

// console.log("Hello this is first.");

// setTimeout(()=>{
//     console.log("This is second.");
// },2000);

// function disp() {
//     console.log("This is second.");
// }
// setTimeout(disp, 2000);
// console.log("Hello This is third.");

// function sum(){
//     setTimeout(()=>{
//         console.log("This is second.",a);
//     },2000)
// }
// sum((a)=>{
//     console.log("This is first.");
//     a(12);
// });