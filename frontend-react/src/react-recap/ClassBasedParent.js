import React from "react";

class ClassBasedParent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            age:this.props.age
        }
    }
    handleAge(e){
        this.setState({age:e.target.value})
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.age} onChange={(e)=>this.handleAge(e)}/>
                <h1>Age submitted: {this.state.age}</h1>
            </div>
        )
    }

}

export default ClassBasedParent
