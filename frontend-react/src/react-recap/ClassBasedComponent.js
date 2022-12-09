import React from "react";
import ClassBasedParent from "./ClassBasedParent";

class ClassBasedComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    increment(){
     this.setState({count:this.state.count+1})   
     
    }
    render(){
        return(
            <div>
                
                <h1>hello my first react class component {this.state.count}</h1>
                <button onClick={()=>this.increment()}>Increment</button>
                <ClassBasedParent age={20}/>
            </div>
        )
    }

}

export default ClassBasedComponent
