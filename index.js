// console.log("num", num);
// console.log("heelo world");
// let num = 5;
// function Sum(number) {
//   return number + number;
// }
// var sum1 = Sum(num);
// var sum2 = Sum(10);

// console.log(x);
// var x = 100;
// test();
// function test() {
//   console.log("I will be hoisted");
// }
// console.log(x);
// x = 50;

// let x = 500;
// console.log("x", x);
// var z = 30;
// test();
// function test() {
//   // function statememnt/ fn declaration
//   console.log("heelo world");
// }
// getData();
// var getData = function test() {
//   // fn expression
//   console.log("hello world");
//   return "hii";
// };

// getData: undefined
// test:{}

// function outer() {
//   console.log("inner", inner);
//   if (false) {
//     var inner = "Hello, this is inner";
//   }
//   console.log("last console", inner);
// }
// outer();

// var x = 10;
// function test() {
//   console.log(x);
// }
// test();

// var x = 10;
// function test() {
//   console.log("x", x);
//   var x = 200;
// }
// function testing() {
//   var x = 20;
//   test();
// }
// testing();

// function statement
// function functionName() {
//   // logic
//   console.log("hello World");
// }
// functionName();
// function Expression
// storeFunction();
// storeFunction();
// var a = 50;
// function test() {
//   console.log("heelo");
// }

// var storeFunction = function functionName() {
//   // logic
//   console.log("hello World");
// };
// storeFunction();
// arrow function
// const test = (a, b) => a * b;

// console.log(test(2, 5));

// anonymous function

// function (){
//   console.log("heelo")
// }

// setTimeout(function () {
//   console.log("Print after 1 sec");
// }, 3000);

// IIFE immediately invoked function expression
// (function () {
//   console.log("heelo");
//   let sum = 0;
// })();

// function calculateSum(){
//   sum = 10
// }
// function test(){
//   sum = sum + 50;
// }

// function test(a = 0, b = 0) {
//   // console.log("b", b);
//   return a + b;
// }
// console.log(test(4, 8));

// why are function called first class citizen in js

//1. function can be stored in a variable
// const testVariable = function test() {
//   return "hello world";
// };
// testVariable();

// 2. function can be passed as an argument to another function in js

// function testing(func) {
//   return func();
// }
// console.log(testing(greeting));
// function greeting() {
//   return "hello";
// }

//3. we can return a function inside a function
function Demo() {
  var a = 50;
  return function () {
    console.log(a);
  };
}
console.log(Demo());
const demo1 = Demo();
demo1();
// const store = Demo();
// store();
// console.log("store", store);
// console.log(Demo());
