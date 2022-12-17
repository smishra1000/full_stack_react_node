

// // // let employee = {
// // //     empid:"123"
// // // }

// // // console.log(employee);

// // // //2

// // // let p1 = new Object(); 
// // // console.log(p1);

// // // //3 

// // // function sum(a,b){
// // //     return a+b 
// // // }

// // // let result = sum(2,3)

// // // function Employee(name,age){
// // //     this.name=name;
// // //     this.age = age;
// // // }

// // // let e1 = new Employee("test",30);
// // // let e2 = new Employee("test3",60);
// // // console.log(e1);


// // // //3 

// // // class Person{
// // //     constructor(name,age){
// // //         this.name=name;
// // //         this.age = age;
// // //     }
// // // }

// // // let emp = new Person("test10",50)
// // // console.log(emp);
// // //-------------------------------------

// // // This in js 

// // // console.log(a,this.a);//



// // // function showA(){
// // //     var a = 70
// // //     console.log("value of a = ",a,this.a)//70,70
// // // }



// // // //showA();
// // // window.showA();
// // // //this.showA();



// // // var name="test"

// // // let user1 = {
// // //     name:"test1",
// // // }

// // // let user2 = {
// // //     name:"test2"
// // // }

// // // function showUser(greet){
// // //     console.log(this);
// // //     console.log(this.name)
// // // }

// // // showUser();//test
// // // showUser();//test

// // // showUser.call(user2)

// // // showUser.call(user1,"good morning")
// // // showUser.apply(user2,["good morrning"])



// // // call----pass parameter as string 

// // // apply---pass parameter as an array

// // //bind 
// // // let newfn = showUser.bind(user1);
// // // newfn("good evening");

// // //-----------async ,promise,callback,async/await


// // // console.log("first");

// // // console.log("second");

// // // console.log("third");


// // // console.log("first");

// // // setTimeout(function(){
// // //     console.log("second");
// // // },2000)

// // // console.log("third");

// // // function placeOrder(fn){
// // //     setTimeout(function(){
// // //         console.log("placing order");
// // //         console.log(fn)
// // //         fn();
// // //     },2000)
    
// // // }

// // // function makepayment(){
// // //     console.log("payment done")
// // // }

// // // placeOrder(makepayment);

// // // promsie based example
// // function sayHi(){
// //     console.log("saying hi")
// // }

// // function getEmployees(){
// //     console.log("employee retrived successfully");
// // }

// // function createEmployee(){
// //     return new Promise(function(resolve,reject){
// //         setTimeout(function(){
// //             console.log("employee insertion started");
// //             resolve("employee inserted successfully");
// //         },2000)
// //     })
// // }

// // // createEmployee().then(function(res){
// // //     console.log(res);
// // //     getEmployees();
// // // }).catch(function(err){
// // //     console.log(err)
// // // })
// // // sayHi();


// // // async await based example
// // async function startInsertion(){
// //     let result = await createEmployee();//
// //     console.log(result)
// //     getEmployees();//
// // }

// // startInsertion();











// var name="react"

// var eventobj = {
//     name:"sameer",
//     display:function(){
//         console.log(this)//eventonj
//         console.log(this.name)//sameer
//     }
// }

// var newDisplay = eventobj.display

// console.log(newDisplay)

// newDisplay();

// function show(){
//     console.log("outsdie value=",this.name)//undefined
// }

// //eventobj.display();
// // show();


let user = {
    subject:"python",
    show:function(){
        console.log(this)//user
        console.log(this.subject);//python
    }
}

let user2 = {
    subject:"javacsript",
}

//user.show();//

let showNew = user.show.bind(user2)

showNew()









