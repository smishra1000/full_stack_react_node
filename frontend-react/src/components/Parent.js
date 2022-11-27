import React from "react";
import Child from "./Child";

class Parent extends React.Component{
    constructor(){
        console.log("i am in parent constructor")
        super()
        this.state={
            count:0,
            show:true
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("i m in parent getDerivedStateFromProps")
        return {}
    }

    componentDidMount(){
        console.log("i m in parent componentDidMount")
    }
    increment(){
        this.setState({count:this.state.count+1})
    }

    hide(){
        this.setState({show:!this.state.show})
    }

    render(){
        console.log("i m in parent render")
        let child = "";
        if(this.state.show){
            child = <Child count={this.state.count}/>;
        }else {
            child = null
        }
        return(
            <div>
                <h1>I am in parent count {this.state.count}</h1>
                <button onClick={()=>this.increment()} className="btn btn-success">Increment</button>
                <button onClick={()=>this.hide()}>Hide Child</button>
                {child}
            </div>
        )
    }
   
}

export default Parent