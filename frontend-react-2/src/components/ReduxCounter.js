import {useDispatch,useSelector} from "react-redux";
function ReduxCounter(){
    const dispatch = useDispatch();
    const state = useSelector(state=>state.counter)

    function increment(){
        dispatch({type:"increment"})
    }
    return(
        <div>
            <h1>Demo for react redux</h1>
            <h1>Count : {state.count}</h1>
            <button onClick={()=>increment()}>Increment</button>
        </div>
    )
}

export default ReduxCounter