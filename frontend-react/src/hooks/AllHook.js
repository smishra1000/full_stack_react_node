import MenuItem from "./PropsDrilling";
import UseEffectHookDemo from "./UseEffect";
import UseState from "./UseState"
import ContextHookDemo from "./UseContextHookDemo";
import UseReducerHookDemo from "./UseReducerDemo";
import UseRefDemo from "./UseRefDemo";


function AllHook(props){
    return(
        <div>
            <h1>Demo ofReact Hooks</h1>
            {/* <UseState/>
            <UseEffectHookDemo/> */}
            {/* <MenuItem/> */}
            {/* <ContextHookDemo/> */}
            {/* <UseReducerHookDemo/> */}
            <UseRefDemo/>
        </div>
    )
}

export default AllHook