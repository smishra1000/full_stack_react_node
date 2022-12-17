// ------------------using callback ----------------------
// let employees = [
// ]


// function saveEmployee(a){
//     // event.preventDefault()
//     // let id = document.getElementById("id").value
//     // let name = document.getElementById("name").value
//     // let age = document.getElementById("age").value

//     console.log("employee saving is calling")
//     setTimeout(function(){
//         let employee = {
//             id:Math.random(),
//             name:"sameer",
//             age:20
//         }
//         console.log("employee saved successfully")
//         employees.push(employee);
//         a();
//     },2000)

// }

//inversion of control----

// function getEmployees(){
//     console.log("employee get successfully")
//     let empContainer = document.getElementById("emp-container")
//     empData=""
//     employees.forEach(function(item){
//         empData+= `<li>${item.id} &nbsp; &nbsp; &nbsp; &nbsp;   ${item.name}&nbsp;&nbsp;&nbsp;&nbsp;      ${item.age}`
//     })
//     empContainer.innerHTML=empData
// }

// saveEmployee(getEmployees)

//--------------------using promisesame example--------------

// let employess = []

// function saveEmployee(){
//     return new Promise(function(resolve,reject){
//         console.log("employee saving is calling")
//         setTimeout(function(){
//             let employee = {
//                 id:Math.random(),
//                 name:"sameer",
//                 age:20
//             }
//             console.log("employee saved successfully")
//             employess.push(employee);
//             resolve("employee saved!!!!")
            
//         },2000)
//     })
// }

// function getEmployees(){
//     console.log("employee get successfully")
//     let empContainer = document.getElementById("emp-container")
//     empData=""
//     employess.forEach(function(item){
//         empData+= `<li>${item.id} &nbsp; &nbsp; &nbsp; &nbsp;   ${item.name}&nbsp;&nbsp;&nbsp;&nbsp;      ${item.age}`
//     })
//     empContainer.innerHTML=empData
// }


// saveEmployee().then(function(res){
//     getEmployees();
// }).catch(function(err){
//     console.log("err",err)
// })


//--------------------async awit------------

// async function employeeInit(){
//     let employess = await saveEmployee();
//     getEmployees();
// }

// employeeInit();