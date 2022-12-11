import {useEffect,useState} from  "react"
function UseEffectHookDemo(){
    const [count,setCount] = useState(0)

    // useEffect(()=>{
    //         console.log("hello")
    // })

    // useEffect(()=>{
    //     console.log("hello")
    // },[])

    // useEffect(()=>{
    //     console.log("hello")
    // },[count])
    

    

    function increment(){
        setCount(count+1)
    }
    return(
        <div>

            <h1>Use effect hook demo </h1>
            <h1>Count : {count}</h1>
            <button onClick={()=>increment()}>increment</button>
        </div>
    )
}

export default UseEffectHookDemo