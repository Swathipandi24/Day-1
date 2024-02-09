/* 

//Objects in JavaScript:
In JavaScript, an object is a collection of key-value pairs, where each key is a string (or symbol) and each value can be any data type, 
including other objects, functions, arrays, and primitives. Objects in JavaScript can be created using object literals,
constructors, or classes, offering a versatile approach to data modeling and manipulation
 */

//Example program
// Define a Person object using an object literal

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "Exampleland"
    },
    hobbies: ["reading", "coding", "traveling"]
};
//In this example, person is an object with properties like firstName, lastName, age, address, and hobbies


/* Frames
Global frame
person	
 
Objects
object
street	"123 Main St"
city	"Anytown"
country	"Exampleland"

array
0	1	2
"reading"	"coding"	"traveling"

object
firstName	"John"
lastName	"Doe"
age	30
address	
 
hobbies	
 
 */


// Accessing properties of the Person object
console.log(person.firstName); // Output: John
console.log(person.address.city); // Output: Anytown

// Modifying a property
person.age = 31;

// Adding a new property
person.gender = "Male";

// Deleting a property

delete person.age;

/* 
//Internal Representation of Objects in JavaScript:
         Internally, JavaScript engines manage objects using various data structures and optimizations.
While the specifics can vary between engines, they typically involve concepts like property maps, 
hidden classes, and inline caching. Let's discuss briefly:

1.Property Maps:
Objects in JavaScript often use property maps to store and manage their properties efficiently. 
These maps typically contain information about the object's properties, such as their names, values, and attributes.


2.Hidden Classes:
JavaScript engines may use hidden classes (also known as shapes or structures) to optimize property access and memory usage.
Objects with the same structure share a common hidden class, allowing the engine to optimize property access based on these classes.


3.Inline Caching:
Inline caching is a performance optimization technique used by JavaScript engines to accelerate property access.
It involves caching property access information at runtime, allowing subsequent property accesses to be resolved more quickly.

4.Property Descriptors:
Each property of an object in JavaScript is associated with a property descriptor, which contains metadata about the property, 
such as its value, writability, and enumerability. Property descriptors help define the behavior of properties 
and enable features like getters and setters.These are just a few aspects of how objects are internally represented in JavaScript
JavaScript engines employ various strategies and optimizations to ensure efficient memory usage and fast property access,
ultimately contributing to betterperformance of JavaScript applications.


 */


