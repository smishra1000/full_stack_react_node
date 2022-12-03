import React from "react"
class Child extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            parentAge:this.props.parentAge
        }
    }


    handleParentAge(e){
        this.setState({parentAge:e.target.value})
        this.props.handleParentAge(e.target.value)
    }
    render(){
        console.log("i am calling in child")
        return(
            <div><h1>Child component</h1>
            <input type="text" value={this.state.parentAge} onChange={(e)=>this.handleParentAge(e)}/>
            <h1>Child age {this.props.age}</h1>
            </div>
        )
    }
}

export default Child