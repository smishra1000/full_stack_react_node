// class User{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     showUser(){
//         console.log("showing user info",this.name,this.age);
//     }
// }



// class Employee extends User{
//     constructor(name,age,company,salary){
//         super(name,age)
//         this.company = company;
//         this.salary = salary;
//     }
//     showEmployee(){
//         console.log("employee info",this.company,this.salary)
//     }
// }

// let emp1 = new Employee("test",30,"abc",10000)

// emp1.showEmployee();


// function User(){
//     console.log(this);
//     this.id="1",
//     this.name="test"

// }

// let u = new User()//1. 

// // {}----new User()

// // {}.User()

// console.log(u)

let user = {
    name:"test",
    age:20,
    roll:101,
    showInfo:()=>{
        console.log(this);
        console.log("roll=",this.roll);
    }
}

user.showInfo();


