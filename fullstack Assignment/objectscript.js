 let name='hello';
 var name1='world';
 const name3='something';

        //Object Practice Questions
        //1.Create an object
// Creating the student object
// const student = {
//   name: "Amit",
//   age: 22,
//   course: "MCA"
// };

// // Printing the object
// console.log(student);

// Output:
// { name: 'Amit', age: 22, course: 'MCA' }

        //2.Access and update property
// const student = { name: "Ravi", age: 21 };

// // Update age
// student.age = 22;

// console.log(student);
// // Output: { name: "Ravi", age: 22 }

        //3.Add a new property
// const student = { name: "Anita", age: 23 };

// // Add grade property
// student.grade = "A";

// console.log(student);
// // Output: { name: "Anita", age: 23, grade: "A" }

        //4. Delete a property
// const student = { name: "Raj", age: 20 };

// // Remove the age property
// delete student.age;

// console.log(student);
// // Output: { name: "Raj" }

        //5.Loop through object keys
// const product = { id: 1, name: "Laptop", price: 45000 };

// // Get all keys
// const keys = Object.keys(product);

// console.log(keys);
// // Output: ["id", "name", "price"]

            //6.Loop through object values
// const product = { id: 1, name: "Laptop", price: 45000 };

// // Get all values
// const values = Object.values(product);

// console.log(values);
// // Output: [1, "Laptop", 45000]

            //7.Object.keys()
// const shoe = { brand: "Nike", size: 9, color: "Black" };

// // Get keys as an array
// const keysArray = Object.keys(shoe);

// console.log(keysArray);
// // Output: ["brand", "size", "color"]

            //8.Object.values()
// const shoe = { brand: "Nike", size: 9, color: "Black" };

// // Get values as an array
// const valuesArray = Object.values(shoe);

// console.log(valuesArray);
// // Output: ["Nike", 9, "Black"]

            //9.Object.entries()
// const obj = { a: 10, b: 20 };

// // Convert to key-value pairs array
// const entriesArray = Object.entries(obj);

// console.log(entriesArray);
// // Output: [["a", 10], ["b", 20]]

            //10.Count properties
// const obj = { x: 1, y: 2, z: 3 };

// // Count properties
// const count = Object.keys(obj).length;

// console.log("Number of properties:", count);
// // Output: 3

            //11.Check if property exists
// const student = { name: "Ravi", age: 22 };

// // Arrow function to check property
// const hasProperty = (obj, prop) => prop in obj;

// console.log(hasProperty(student, "email")); // false
// console.log(hasProperty(student, "name"));  // true

                //12.Nested objects
// let student = {
//   name: "Asha",
//   address: { city: "Delhi", pincode: 110001 },
// };

// // Access city
// console.log(student.address.city); // Output: Delhi

                //13.Object inside array
// let students = [
//   { name: "Amit", age: 22 },
//   { name: "Neha", age: 21 },
//   { name: "Ravi", age: 23 },
// ];

// // Using forEach
// students.forEach(student => console.log(student.name));

                //14.Array inside object
// let student = { 
//   name: "Kiran", 
//   subjects: ["Math", "Science", "English"] 
// };

// // Print first subject
// console.log(student.subjects[0]); // Output: Math

                //15.Functions in objects
// let calculator = {
//   add: function(a, b) {
//     return a + b;
//   }
// };

// // Example usage
// console.log(calculator.add(5, 3)); // Output: 8

                //16.this keyword in object
// let person = {
//   name: "John",
//   sayHello: function() {
//     console.log("Hello, my name is " + this.name);
//   }
// };

// // Method call
// person.sayHello(); // Output: Hello, my name is John

                //17.Object.freeze()
// let obj = { x: 10 };

// // Freeze the object
// Object.freeze(obj);

// // Try to change the property
// obj.x = 20;

// console.log(obj.x); // Output: 10 (change won’t happen)

                        //18.Object.seal()
// let obj = { y: 5 };

// // Seal the object
// Object.seal(obj);

// // Update existing property
// obj.y = 10;  
// console.log(obj.y); // ✅ 10 (allowed)

// // Try adding a new property
// obj.z = 15;  
// console.log(obj.z); // ❌ undefined (cannot add new properties)

                        //19.Merge two objects
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };

// let merged = { ...obj1, ...obj2 };

// console.log(merged); 
// Output: { a: 1, b: 2, c: 3, d: 4 }


                        //20.Convert array to object
let arr = ["id", 101, "name", "Raj"];

let obj = Object.fromEntries([
  [arr[0], arr[1]], 
  [arr[2], arr[3]]
]);

console.log(obj);
// Output: { id: 101, name: "Raj" }
