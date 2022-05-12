console.log("This tutorial is for arrow function.");

//ARROW FUNCTIONs

//creating a reguler function1📌
// const sanjay = function(name){
//     console.log(`${name}, is the best person ever`);
// }
// sanjay("sanjay");


//converted it an arrow function1📌
// const sanjay = (name)=>{
//     console.log(`${name}, is the best person ever`);
// }
// sanjay("sanjay");


//creating a reguler function2📌
// const greet = function(){
//     return "Good morning";
// }
// console.log(greet());


//converted it an ONE LINER arrow function2📌
// const greet = () => "Good morning";
// console.log(greet());

//converted it an ONE LINER arrow function2 AND RETURNING OBJECT📌
// const greet = () => ({greet: "Good morning"});
// console.log(greet());


//converted it an ONE LINER arrow function2📌
// const greet = (name) => "Good morning "+ name;
// console.log(greet("Sanjay"));

// //converted it an ONE LINER arrow function2📌
// const greet = name => "Good morning "+ name;//single paramiter don't need parenthisis
// console.log(greet("Sanjay"));


//converted it an ONE LINER arrow function2📌
const greet = (name, ending) => "Good morning "+ name+ ending;//multiple paramiters need parenthisis
console.log(greet("Sanjay", " Bye"));