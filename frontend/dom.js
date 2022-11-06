// How  to access element 

// 1>getElementsById--


let div = document.getElementById("box1");
console.log(div);
// div.textContent="hello"
// div.style.color="red";

//getElementByClassName

// let divwithclass = document.getElementsByClassName("box-div");
// console.log(divwithclass)
// console.log("length=",divwithclass.length)
// divwithclass[0].textConSelectorAlltent="hello div by class"
// divwithclass[1].textContent="hello in 2nd div"
// divwithclass[0].style.color= "green"

// getElementByTagsName

let divwithTags = document.getElementsByTagName("p");
console.log("with tag name",divwithTags.length)


//querySelector 
let paraWithQuery = document.querySelector(".box-div>.box-div>p");
console.log("with query",paraWithQuery);

//querySelectorAll 

let paaraWithAllQuery = document.querySelectorAll(".box-div>.box-div>p");
console.log("with query all ",paaraWithAllQuery)
console.log("particular",paaraWithAllQuery[0])
// console.log(paaraWithAllQuery[0],paaraWithAllQuery[1],paaraWithAllQuery[2])
// console.log(paaraWithAllQuery[0].nextSibling.firstChild)



// getElementById----for single element with id 
// getElementsByTagName ---for multitple elements with tag 

// getElementsByClassName----for multiple elements ---class name 

// querySelector----for single element ---any id,class,tag as a query 

// querySelectorAll---for multiple elements----any id,class,tag  as query 


let headers = ['age','name','salary','address'];

let employees = [
    {
        id:1,
        name:"sameer",
        age:"20",
        address:"hyd"
    }
]
let table = document.createElement("table");
let headingRow = document.createElement("tr");
let heading = document.createElement("th");
for(let i =0;i<headers.length;i++){
    textContent = document.createTextNode(headers[i]);
    heading.appendChild(textContent);
}

headingRow.appendChild(heading);
table.appendChild(headingRow);
document.body.appendChild(table);


let h1 = document.createElement("h1");
h1.className+= "my-head";
h1.className+= " " +"my-head2";
h1.id="myh1";
h1.style.color="red";
let text = document.createTextNode("hello i am heading h1");
h1.appendChild(text);
document.body.appendChild(h1);

let btn = document.createElement("button");
text = document.createTextNode("delete")
btn.appendChild(text);
btn.style.width="100px";
btn.style.height="100px";
btn.style.background="blue";
document.body.appendChild(btn);

btn.addEventListener('click',function(){
    let divbox = document.getElementById("box1");
    divbox.replaceWith("helolo replaced");
    //divbox.remove();
})

h1.addEventListener('mouseover',function(){
    console.log("h1 clicked")

})









