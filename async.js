// what is closure

// function around it's lexical scope
// lexical scope --> function's scope + parent scope + ....

// function Outer() {
//   var a = 30;
//   var y = 50;
//   var z = 100;
//   function inner() {
//     var a = 100;
//     var b = 10;
//     console.log(a);
//     console.log(y);
//     function SupperInner() {
//       console.log(z);
//     }
//     SupperInner();
//   }
//   inner();
// }
// Outer();

// ASYNCHRONOUS JS
// blocking code --> API CAlls, setTimeout

// var a = 60;
// APICALL // 3sec
// console.log(a)

//call stack?
// callback, promises, async await
// setTimeout(() => {
//   console.log("heelo");
// }, 0);
// var a = 50;
// console.log(a);

setTimeout(() => {
  console.log("hello");
});
const promise = new Promise((resolve, reject) => {
  resolve("sucess");
});
promise.then((val) => console.log(val));

console.log("sync code");
