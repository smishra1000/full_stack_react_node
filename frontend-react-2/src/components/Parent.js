import React from "react"
import Child from "./Child"
class Parent extends React.Component{
    constructor(){
        super();
        this.state = {
            parentAge:60,
            childAge:30
        }
    }

    handleAge(event){
        console.log(event.target.value)
        this.setState({childAge:event.target.value})
    }
    handleParentAge(data){
        console.log("recieved from child",data)
        this.setState({parentAge:data})
    }
    render(){
        console.log("i am calling in parent")
        return(
            <div><h1>Parent component</h1>
            <h1>Parent age : {this.state.parentAge}</h1>
            {/* <input type="text" value={this.state.childAge} onChange={(e)=>this.handleAge(e)}/> */}
            <Child age={this.state.childAge} parentAge={this.state.parentAge} handleParentAge={(data)=>this.handleParentAge(data)}/>
            </div>
        )
    }
}

export default Parent