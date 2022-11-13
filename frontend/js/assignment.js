// 1> create 3 function getUsers() then create getRoles() then create PrintRole()
//     check 
//     if role is admin 
//         "you are admin"
//     if not then print 
//         you are not an admin



function getUsers(){
    console.log("calling getuser")
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("got the users now")
            resolve({
                id:1,
                name:"sameer",
                age:20
            })
        },8000)
    })
    
}

function getRoles(){
    console.log("calling get roles")
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("got roles now")
            resolve({
                id:1,
                role:"admin"
            })
        },8000)
    })
}

function printRole(role){
    console.log("printing role");
    if(role==='admin'){
        console.log("i am admin")
    }else{
        console.log("not an admin")
    }
}

// promise based call
function getUsersRolesAndPrintUsingPromise() {
    getUsers().then(function(res){
        console.log("result from users",res)
        getRoles().then(function(res){
            console.log("result from roles ==",res)
            printRole(res.role);
        })
    })
}

// getUsers();
// getRoles();
// printRole();

async function getUsersRolesAndPrintUsingAsyncAwait(){
    let users = await getUsers();
    console.log("users recievd=",users);
    let role = await getRoles();
    console.log("role recieved =",role);
    printRole(role.role);
}

//getUsersRolesAndPrintUsingPromise();
getUsersRolesAndPrintUsingAsyncAwait();

