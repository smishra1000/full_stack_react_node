import {useState} from "react"
function FunctionBasedComponent(){
    const [count,setCount] = useState(0)
    const [age,setAge] = useState(0)

    function increment(){
        setCount(count+1)
    }

    function handleAge(e){
        setAge(e.target.value)
    }
    return(
        <div><h1>I am from function based componenet {count}</h1>
        <button onClick={()=>increment()}>Increment</button>
        <input type="text" value={age} onChange={(e)=>handleAge(e)}/>
        <h3>Age: {age}</h3>
        </div>
    )
}

export default FunctionBasedComponent