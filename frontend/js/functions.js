var user = {
    name:"sameer from user",
    age:20,
    show:function(greet){
        console.log("name==",this.name,greet)
    }
}

console.log(this.user.name)

//user.show()

let user2 = {
    name:"carrerx",
}

let user3 = {
    name:"test"
}
show.call(user2,"good evening");
show.apply(user3,["good night"]);
// let tempShow = user.show.bind(user3)
// tempShow("good morning");

var name="sameer from window";

function show(greet){
    console.log("this",this,greet)
}



// user.show.call(user2)

// user==this