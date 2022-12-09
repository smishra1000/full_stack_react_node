
import {useState} from "react"
import {useNavigate} from "react-router-dom"
function EmployeePage(){
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [salary,setSalary] = useState("")

    const navigate = useNavigate()

    const handleNameChange = (e)=>{
        setName(e.target.value)
    }
    const handleAgeChange = (e)=>{
        
        setAge(e.target.value)
    }
    const handleSalaryChange = (e)=>{
        setSalary(e.target.value)
        
    }
    const save = ()=>{
        let employee = {
            name,
            age,
            salary
        }
        localStorage.setItem("employeeInfo",JSON.stringify(employee))
        // navigate from this page to other page
        navigate("/employeelist");
    }

    return(
        <div>
            <h1>I am is employee Page</h1>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>handleNameChange(e)}/>
            <label>Age</label>
            <input type="text" value={age} onChange={(e)=>handleAgeChange(e)}/>
            <label>Salary</label>
            <input type="text" value={salary} onChange={(e)=>handleSalaryChange(e)}/>
            <button className="btn btn-primary" onClick={()=>save()}>Save</button>
        </div>
    )
}

export default EmployeePage