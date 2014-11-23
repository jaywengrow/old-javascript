// // // Introducing... JavaScript!

// // Alert

// alert("Hello");

// // The console

// console.log("Hello");

// // Setting Variables

// var x = "well, hello there!";

// console.log(x);

// // Concatenation

// var x = "cat";
// var y = "fish";
// console.log(x + y);

// // Numbers: Integers

// var x = 1;
// var y = 2;
// console.log(x + y);

// // Numbers: Floats

// var x = 1.5;
// var y = 4.74;
// console.log(x + y);

// // Increment and Decrement

// var x = 1;
// x++;
// console.log(x);
// x--;
// console.log(x);

// // Booleans

// var x = true;
// var y = false;
// console.log(x);
// console.log(y);

// // Arrays

// var people = ["Jane", "John", "Joan"];
// console.log(people[0]);
// console.log(people[1]);
// console.log(people[2]);

// people.push("Cookie Monster");
// console.log(people);
// console.log(people.length);

// // Objects (similar to Ruby hashes)

// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// var x = "firstName"
// console.log(person[x]);
// console.log(person.lastName);

// // Declaring a variable but leaving it undefined

// var x;
// console.log(x);

// // typeof - seeing what kind of type something is

// console.log(typeof "John"); //String            
// console.log(typeof 3.14);   //number    
// console.log(typeof false);  //Boolean            
// console.log(typeof [1,2,3,4]); //Object     
// console.log(typeof {name:'John', age:34}); //Object

// // Conditionals

// var x = 33;

// if (x > 50) {
//   console.log("High number");
// } else if (x < 25) {
//   console.log("Low number");
// } else if (x === 31) {
//   console.log("My favorite number")
// } else {
//   console.log("Medium number");
// }

// // Falsy things:

// if (false) {alert("WAT");}
// if (null) {alert("WAT");}
// if (undefined) {alert("WAT");}
// if (0) {alert("WAT");}
// if ("") {alert("WAT");}
// if (NaN) {alert("WAT");}

// // Random numbers:

// // random number between 1 and 10:

// Math.floor((Math.random() * 10) + 1);

// // For loops

// for(var i = 0; i < 10; i++) {
//   console.log(i);
// }

// What the above for loop means in English:
// for(let's set an arbitrary variable called i to be set to 0; let's continue running the loop as long as i is less than 10; each time the loop runs, increase i by 1.)
// Essentially, this is a loop running 10 times, and in each passthrough, i will be increased by 1. It starts at 0, and ends at 9.

// // Functions (similar to Ruby methods, but still quite different, as you'll see later on.)

// function sayHello() {
//   console.log("Hello!");
// }

// sayHello();

// function addTwoNumbers(numberOne, numberTwo) {
//     return numberOne + numberTwo;              
// }

// console.log(addTwoNumbers(1, 99));

// // Basic scope

// function trickedYa() {
//   var z = "Zebra";
//   console.log(z);
//   return z;
// }

// trickedYa();
// alert(z);
// alert(trickedYa());

// // Functions are first class citizens:

// var cool = function() {
//   console.log("A variable can contain a function!");
// }

// cool();

// // Functions can also, therefore, be one of the properties of an object

// var car = {

//   model: "Buick",
//   year: 2004,
//   miles: 20000,
//   toString: function () {
//     return this.model + " has done " + this.miles + " miles";
//   }

// }

// console.log(car.toString());


// // Constructors (the closest thing to Ruby classes)

// function Car( model, year, miles ) {
 
//   this.model = model;
//   this.year = year;
//   this.miles = miles;
 
//   this.toString = function () {
//     return this.model + " has done " + this.miles + " miles";
//   }
// }
 
// // Usage:
 
// // We can create new instances of the car
// var civic = new Car( "Honda Civic", 2009, 20000 );
// var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
// // and then open our browser console to view the
// // output of the toString() method being called on
// // these objects
// console.log( civic );
// console.log( mondeo.toString() );

