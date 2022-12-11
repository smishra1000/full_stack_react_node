
import { useState } from "react"
function UseStateDemo(){
    const [count,setCount]  = useState(0)
    console.log(useState(0))
    const [name,setName] = useState("")
    const [show,setShow] = useState(false); 
    function increment(){
        setCount(count+1);
    }
    function handleName(e){
        console.log(e.target.value)
        setName(e.target.value)

    }

    function display(){
        setShow(true)
    }
    return(
        <div><h1>Use State hook demo</h1>
        count : {count}
        <button onClick={()=>increment()}>Increment</button>
        <div>
        <input type="text" value={name} onChange={(e)=>handleName(e)}/>
        <button onClick={()=>display()}>Display</button>
        {show && <h1>Name : {name}</h1>}
        </div>
       
        </div>
    )
}

export default UseStateDemo 