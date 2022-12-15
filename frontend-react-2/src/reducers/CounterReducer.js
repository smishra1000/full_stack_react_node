const initialState = {
    count:0
}

function CounterReducer(state=initialState,action){
    if(action.type==="increment"){
        return {count:state.count+1}
    }else {
        return state
    }
}

export default CounterReducer
