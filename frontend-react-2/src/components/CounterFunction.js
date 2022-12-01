import {useState} from "react"

function CounterFunction(props){
    console.log(useState(0))
    const [count] = useState(0)
    const [age] = useState(20)
    return(
        <div>
            <h1>Hello i am in first functional component</h1>
            <h1>Count : {count} Age: {age}</h1>
            {props.company} {props.mob}
        </div>
    )
}

export default CounterFunction