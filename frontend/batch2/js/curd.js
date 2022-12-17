
function saveData(event){
    event.preventDefault()
    let name = document.getElementById("name").value 
    let age = document.getElementById("age").value
    let box = document.getElementById("box")
    box.innerHTML = `<div style="width:300px;height:200px;background:cyan"><h1>Name=${name}</h1><h1>Age=${age}</h1></div>`
    reset();
}

function reset(){
    document.getElementById("name").value=""
    document.getElementById("age").value=""
}