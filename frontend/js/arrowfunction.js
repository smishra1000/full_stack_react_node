// let user = {
//     name:"sameer",
//     show:()=>{
//         console.log(this)//window
//         console.log("hello in arrow",this.name)
//     },
//     show2:function(){
//         console.log(this)//user
//         console.log("hello in normal",this.name)
//     }
// }

// user.show();
// user.show2();

// map function





let arr2 = arr.map(function(item,index,arr){
    console.log(item,index,arr)
    return item*2;
})

console.log(arr2)