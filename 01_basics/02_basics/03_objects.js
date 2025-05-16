/////////////////////////////// objects///////////////////////////////////////////////////////////////////////
// singleton 
///////////////////////////////////////////////  objects literals //////////////////////////////////////////////////////
//let mysml = Symbol("Key1")
// const jsUser ={
//     "fullname" : "Lalit Sharma",
//     name: "lalit",
//     [mysml] : "mykey1",
//     age:18,
//     location:"Aligarh",
//     email:"lalit@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"]
// }

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["fullname"])
// console.log(jsUser[mysml]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jsUser.email = "lalit@google.com"
// Object.freeze(jsUser)
// jsUser.email  = "hitesh@gmail.com"
// console.log(jsUser)




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 


// jsUser.greeting = function(){
//     console.log("Hello JS User")
    
// }
// jsUser.greetingTwo = function(){
//     console.log(`Hello Js User,${this.fullname}`);
    
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());




///////////////////////////////////////// constuctor  type ////////////////////////
const tinderUser = new Object()
const tinderUser1 = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


// const regularUser = {
//     email:"kjfsnknf",
//     fullname:{
//         Userfullname:{
//             firstname:"lalit",
//             lastname:"sharma"
//         }

//     }
// }
//console.log(regularUser.fullname);

// console.log(tinderUser);
// console.log(tinderUser1 );




/////////////////////////// combine objects///////////////////////


// const obj1 = {1:"a",2:"b"}
// const obj2= {3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

////const obj3 = {...obj1,...obj2}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLogded'));



