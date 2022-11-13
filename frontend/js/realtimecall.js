//
var apiUrl = "https://jsonplaceholder.typicode.com/todos/1"


//using promise demo

//1>first get the user then  display the user info

function userDb(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("getting user")
            resolve({
                id:"1",
                name:"test",
                age:20,
                address:"hyd"
            }) 
        },6000)
    })
}

function getUserFromDb(){
        userDb().then(function(res){
        console.log("hello i am displying user=",res)
        displayUserOnScreen();
        })
}

async function getUserFromDbUsingAsyncAwait(){
    let res = await userDb();
    console.log("hello i am displying user=",res)
    displayUserOnScreen();


}


function displayUserOnScreen(){
    console.log("user displayed successfully")
}

//getUserFromDb();

getUserFromDbUsingAsyncAwait();

//user data
{
    id:1
    name:"sameer",
    role:"admin",
    age:30
}
//role data
 {
    id:1,
    role:"admin"
}

// 1> create 3 function getUsers() then create getRoles() then create PrintRole()
//     check 
//     if role is admin 
//         "you are admin"
//     if not then print 
//         you are not an admin


