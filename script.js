//let, var and const
//8/9/2025  monday

 let name='hello';
 var name1='world';
 const name3='something';

// if(name=='hello')
// {
//     var name4='name4';
//     console.log(name1);
// }
    
// console.log(name1);


// console.log(student);
// var student ="komal";


// function show()
// {
//     console.log("show something");
// }
// console.log(window);

//var show function are vioce are not?  yes (undefined)
// var show=()=>{
//     console.log("show something from arrow function");

// };
// show =48;
// //show();
// console.log(show);



// function outer(){
//     return function inner(){
//         console.log('ineer function is executed');
//     };
//     inner();
// }
// console.log(outer());

// const innerFunction=outer();
// innerFunction();

//convert into arrow function
// function first(){
//     console.log("first function is executed");
//      return function second(){
//     console.log("second function is executed");
//      return function third(){
//     console.log("third function is executed");
// };
// };
// }

// const secondFunction=first();
// const thirdFunction=secondFunction();
// thirdFunction();
//        OR
// first()()();
        
       // ARROW  FUNCTION
// const first = () => {
//   console.log("first function is executed");
//   return () => {
//     console.log("second function is executed");
//     return () => {
//       console.log("third function is executed");
//     };
//   };
// };

// first()()(); // call chain



// function argument(){
//     console.log("first argument");
// }
//     function argument2(){
//     console.log("second argument");
// }
// function higherOrder(name,age,thirdParameter){
//     console.log(name,age);
//     thirdParameter();
// }
// higherOrder("komal",22,argument, function argument2(){
//     console.log("second argument");
//                 //OR
// //higherOrder("komal",22,argument,()=> console.log("second argument"));

//     //convert into arrow function(=>)
// });



// Arrow function arguments
// const argument = () => {
//   console.log("first argument");
// };

// const argument2 = () => {
//   console.log("second argument");
// };


// const higherOrder = (name, age, thirdParameter) => {
//   console.log(name, age);
//   thirdParameter();
// };

// // Passing arrow functions as arguments
// higherOrder("komal", 22, argument); 

// // OR directly inline
// higherOrder("komal", 22, () => {
//   console.log("second argument");
// });



//9/9/2025    tuesday

// function normal(){
//   console.log("function executed");
// }
// let arr=[10,20,'string',true,0.001,normal];
// for(var i=0;i<arr.length;i++){
//   if(typeof arr[i]=="function"){
//       arr[i]();
//   }
//       else{
//         console.log(arr[i]);
//       }
  
//   console.log(arr[i]);

// }
// //arr[5]();


// arr[0]=100;
// console.log(arr);

// const arr=[10,20,30,40,50];


// arr.forEach(function(value){
//   console.log(value);
// })

// arr.forEach((value,index)=>console.log(value,index));

// const updateArray=arr.map(function(value){
//   value*2;
// });

// console.log(arr);
// console.log(updateArray);
            //or
// const updateArray2=arr.map((value)=>value*2);


//find the even number
// const arr2=[1,2,3,4,5,6,7,8,9,10];
// for(var i=0;i<arr2.length;i++){
//   if(arr2[i]%2==0){
//     console.log(arr2[i]);
//   }
// }

// const evenValues=arr2.filter(function(value){
//   return value %2==0;
// });

// const evenValues2=arr2.filter((value)=> value%2==0);
// console.log(evenValues);


//calculate the sum ogf element
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// arr.forEach(num => {
//   sum += num;
// });

// console.log("Sum of elements:", sum);

// const sum=arr.reduce((prev,value)=>{
//   prev= prev + value;
//   return prev;
// },0);

// console.log(sum);



// const myObj={
//   "name= anshu":"komal",
//    age:22,
// };
// console.log(myObj.name);
// console.log(myObj.age);
// console.log(myObj["name:anshu"]);

// myObj["marks english"]=100;
// console.log(myObj);

// const newObj={
//   id:101,
//   name:"komal",
//   marks:100,
//   collage:"dypimr"
// };
// const keys=Object.keys(newObj);
// const values=Object.values(newObj);
// console.log(keys,values);




// setTimeout(function(){
//   console.log("ubhale");
// },5000);



// setInterval(function(){
//   console.log("hello");
// },1000);



// const timer =setInterval(function(){
//   console.log(Math.random(),"hello");
// },1000);


// setTimeout(function(){
//   clearInterval(timer);
// },5000);

// PROMISES :consider the object as or placeholder for the future

// const data=fetch("https://api.freeapi.app/api/v1/public/reandomproducts");
// console.log(data);


// const resolvedPromise=new Promise(function(resolve){
//   resolve([10,20,30,40]);
// });
// resolvedPromise.then(function(value){
//   console.log(value);
// });


// const rejectPromise=new Promise(function(resolve,reject){
//   reject("promise rejected manually")
// });
// rejectPromise.then(function(value){
//   console.log(value);
// })
// .catch(function(err){
//   console.log(err);

// });


// const data=fetch("https://api.freeapi.app/api/v1/public/randomproducts")
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));



// console.log(data);
// const response =data.then (function(value){
//   return value.json();
  
// });
// response.then((data)=>{
//   return value.json(data);
// });



// async function callApi(){
//   try{
//   const data= await fetch("https://api.freeapi.app/api/v1/public/randomproducts");

//   const response=await data.json()
//   console.log(response);
// }catch (error){
//   console.log(error);
// }
// }
// callApi();

// console.log("first")
// setTimeout(()=>{
//    console.log("second");
// },5000);
// console.log("third")
// console.log("four")


// for(var index=0;index<10;index++){
//   setTimeout(()=>{
//     console.log(Math.random(),index);
//   },index*1000)
// }


// const newObj={
//   id:101,
//   name:"komal",
//   marks:100,
//   collage:"dypimr"
// };
// const clonedObject = newObj;
//   console.log(newObj);
//   console.log("clonedObject",clonedObject);

//   newObj.name="ubhale";
// console.log(newObj);
//   console.log("clonedObject",clonedObject);


                            //10/10/2025    Wednesday



