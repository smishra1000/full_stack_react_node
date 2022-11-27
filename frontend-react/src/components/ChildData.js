import React from "react";

class ChildData extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            age:20
        }
    }
    onNameChange(e){
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }
    save(){
        console.log("value after save",this.state.name)
        this.props.recieveData(this.state.name);
    }
    render(){
        return(
            <div>
                <h1>hello in child {this.state.age}</h1>
                <input type="text" value={this.state.name} onChange={(e)=>this.onNameChange(e)}/>
                <button onClick={()=>this.save()}>save</button>
            </div>
        )
    }
   
}

export default ChildData