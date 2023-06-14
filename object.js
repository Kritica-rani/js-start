//objects
//key -->property
//value--->

//Acessing Object Properties
// console.log("accesing the property", object.name);
// bracket notation --> object["property"]
// console.log("name-->", object["name"]);
// object.name = "xyz";
// delete object.name;

// destructing of objects

//details.name
// default value in objects, fallback
// const { name, place: personPlace, favColor } = details;
// favColor = "pink";
// console.log("object", details);

// looping methods in object
// for in loop
// for (let key in details) {
//   console.log("key-->", key, "property-->", details[key]);
// }
// Object ,keys
// let key = Object.keys(details);
// console.log("key", key);

// for (let i = 0; i < key.length; i++) {
//   let keys = key[i];
//   console.log(keys, "property", details[keys]);
// }

let details = {
  name: "Kritica",
  place: "Bihar",
  favColor: "Blue",
};

// function printDetails(state) {
//   console.log(this.name, " ", "belongs from", " ", state);
// }

// const data = Object.entries(details);
// console.log("data", data);
// this
// how can we change the context of this
// call, bind, apply
// printDetails.call(personDetails, ["Bihar"]);
// printDetails.call(details, ["UP"]);
// bind --> it return a method which can be invoked later on
// const data = printDetails.bind(personDetails, "Maharatra");
//100 lines of code

// data();

let personDetails = {
  name: "xyz",
  place: "Bihar",
  favColor: "Blue",
  add: {
    city: "Patna",
  },
};
// console.log("nest", personDetails.add.city);
// make copy of an object
// shalow copy
// const obj = { ...personDetails }; // spread operator
// const obj = Object.assign({}, personDetails);
//deep copy
//JSON.stringify();
//JSON.parse()
const obj = JSON.parse(JSON.stringify(personDetails));
console.log("obj", obj);

obj.add.city = "Munger";
console.log("obj-->", obj);
console.log("persondetsilsObj", personDetails);
