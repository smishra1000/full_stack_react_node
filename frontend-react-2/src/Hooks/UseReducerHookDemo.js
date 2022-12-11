import {useReducer} from "react"

const initialState = {
    count :0
}

function CounterReducer(state = initialState,action){
    if(action.type==="increment"){
        return {count:state.count+1}
    }else if(action.type==='decrement') {
        return {count:state.count-1}
    }else {
        return state
    }
}

function UseReducerDemoHook(){
    const [state,dispatch] = useReducer(CounterReducer,initialState)

    function increment(){
        dispatch({type:"increment"})
    }

    function decrement(){
        dispatch({type:"decrement"})
    }
    return(
        <div>
            <h1>Use Reducer Hook demo</h1>
            <h1>Count  :{state.count}</h1>
            <button onClick={()=>increment()}>Increement</button>
            <button onClick={()=>decrement()}>Decrement</button>

        </div>
    )
}

export default UseReducerDemoHook