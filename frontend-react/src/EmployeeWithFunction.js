import { useState } from "react";

function EmployeeWithFunction(props){
const [address,setAddress] = useState("hyd")
const [name,setName] = useState("sameer");

    return(
        <div>
<h1>Hello from employee functioal component {props.company} {address}</h1>
<h4>my name is{name}</h4>

        </div>
    )
}


export default EmployeeWithFunction