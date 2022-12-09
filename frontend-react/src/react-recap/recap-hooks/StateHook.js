import {useState} from "react"
function StateHook(){
    const [name,setName] = useState("sameer");

    const [employee,setEmployee] = useState({name:"test",age:"20",salary:"2000"})

    function onNameChange(e){
        setEmployee({...employee,name:e.target.value,age:20})
    }
    function onAgeChange(e){
        setEmployee({...employee,age:e.target.value})
    }
    function changeEmpData(){
        setEmployee((prevState)=>({
            ...prevState,
            name:"test2",
            age:"100",
        }))
    }
    return(
        <div>
            <h1>first hook demo useState {name}</h1>
            <h1>emp info : {employee.name} {employee.age} {employee.salary}</h1>

            <input type="text" value={employee.name} onChange={(e)=>onNameChange(e)}/>
            <input type="text" value={employee.age} onChange={(e)=>onAgeChange(e)}/>
            <button onClick={()=>changeEmpData()}>Change emp data</button>
        </div>
    )
}


export default StateHook