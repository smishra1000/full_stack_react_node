import {useEffect, useRef} from "react"

function UseRefHookDemo(){
    const inputRef = useRef("")

    useEffect(()=>{
        inputRef.current.focus()
    })

    function submit(){
      console.log("submit is calling")  
      console.log("value eneterd in textbox=",inputRef.current.value)
    }
    return(
        <div>
            <h1>USE REF HOOK DEMO</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={()=>submit()}>Save</button>
        </div>
    )
}

export default UseRefHookDemo