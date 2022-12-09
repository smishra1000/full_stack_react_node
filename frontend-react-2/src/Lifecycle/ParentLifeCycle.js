import React from "react";
import ChildLifeCycle from "./ChildLifeCycle";
class ParentLifeCycle extends React.Component{
    constructor(props){
        super(props)
        console.log("i am constructor")
        this.state = {
            count:0
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("i am getDerivedStateFromProps")
        return {}
    }

    increment(){
        this.setState({count:this.state.count+1})
    }

    render(){
        console.log("i am render")
        return(
            <div>
                <h1>Lifecycle demo</h1>
                <h1>{this.state.count}</h1>y
                <button onClick={()=>this.increment()}>Incrtement</button>
                <ChildLifeCycle count={this.state.count}/>
            </div>
        )
    }
    componentDidMount(){
        console.log("i am component did mount")
    }
}

export default ParentLifeCycle