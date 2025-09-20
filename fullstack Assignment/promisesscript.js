            //1.Basic Promise (Resolve)
// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello World");
//   }, 2000);
// });

// // Print the result using .then()
// myPromise.then(result => {
//   console.log(result); // Output after 2 sec: Hello World
// });

                //2.Basic Promise (Reject)
// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error occurred");
//   }, 1000);
// });

// // Handle rejection
// myPromise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error); // Output after 1 sec: Error occurred
//   });

                //3.Promise Chain
// let myPromise = Promise.resolve(5);

// myPromise
//   .then(num => num * 2)   // multiply by 2 → 10
//   .then(num => num + 10)  // add 10 → 20
//   .then(result => {
//     console.log(result);  // Output: 20
//   });

                //4.Promise.all
// let p1 = new Promise(resolve => {
//   setTimeout(() => resolve("Task 1"), 1000);
// });

// let p2 = new Promise(resolve => {
//   setTimeout(() => resolve("Task 2"), 2000);
// });

// let p3 = new Promise(resolve => {
//   setTimeout(() => resolve("Task 3"), 3000);
// });

// Promise.all([p1, p2, p3])
//   .then(results => {
//     console.log(results); 
//     // Output after 3s: [ 'Task 1', 'Task 2', 'Task 3' ]
//   })
//   .catch(error => console.log(error));


                //5.Promise.race
let p1 = new Promise(resolve => {
  setTimeout(() => resolve("Fast"), 1000);
});

let p2 = new Promise(resolve => {
  setTimeout(() => resolve("Slow"), 3000);
});

Promise.race([p1, p2])
  .then(result => {
    console.log(result); // Output after 1s: "Fast"
  })
  .catch(error => console.log(error));
