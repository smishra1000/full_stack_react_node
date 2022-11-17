//
//var apiUrl = "https://jsonplaceholder.typicode.com/todos/1"


//using promise demo

//1>first get the user then  display the user info

// function userDb(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("getting user")
//             resolve({
//                 id:"1",
//                 name:"test",
//                 age:20,
//                 address:"hyd"
//             }) 
//         },6000)
//     })
// }

// function getUserFromDb(){
//         userDb().then(function(res){
//         console.log("hello i am displying user=",res)
//         displayUserOnScreen();
//         })
// }

// async function getUserFromDbUsingAsyncAwait(){
//     let res = userDb();
//     console.log("hello i am displying user=",res)
//     displayUserOnScreen();


// }


// function displayUserOnScreen(){
//     console.log("user displayed successfully")
// }

//getUserFromDb();

// getUserFromDbUsingAsyncAwait();

//user data
// {
//     id:1
//     name:"sameer",
//     role:"admin",
//     age:30
// }
//role data
//  {
//     id:1,
//     role:"admin"
// }

// 1> create 3 function getUsers() then create getRoles() then create PrintRole()
//     check 
//     if role is admin 
//         "you are admin"
//     if not then print 
//         you are not an admin

// getUserFromDb()
// displayUserOnScreen()




// var a = 20;
// let x =30;
// const z =60;
function showA(){
    // var a = 20;
    // let x =30;
    // const z =60;
    console.log(a,x,z);// 20,30,60
  }
  
  //showA();

  //console.log(a,x,z);//20,not defined// 

//   {
//     var a = 20;
//     let x =30;
//     const z =60;
//   }
//   console.log(a);
//   console.log(x);
//   console.log(z);//20,

//   {
//     var i=1;
//     let z = 2;
//     for(var i=0;i<3;i++){
//         setTimeout(function(){
//             console.log(i,z);
//         })
//     }
    
//   }
// for (var i = 0; i < 3; i++) {
//     console.log(i)
//     setTimeout(() => console.log("hello",i), 1);
// }

// for(let i = 0;i<3;i++){
//     function show(){
//         console.log(i);
//     }
//     show();
// }

//console.log(i);

// var length = 10;

// function fn() {
//     console.log(this);arguments
//     console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {

//     console.log(arguments[0]);
//     console.log(this);
//     fn();
//     arguments[0](); ///arguments[0]
//   }
// };

// obj.method(fn, 1);




// function demo(){
//     console.log(arguments.length);
// }

// demo(2,3);

// function showA()
// {
//     console.log(this);
// }

// showA();


var name = "global name"
let p1 = {
    name:"sameer"
}

let p2 = {
    name:"mahendra"
}


function showName(age){
    console.log("name==",this.name,age);//
}

showName.apply(p2,["20"]);
let showTaken = showName.bind(p2);
showTaken("20");

  


