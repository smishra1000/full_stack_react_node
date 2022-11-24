import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                name:""
        }
        this.handleClick1 = this.handleClick1.bind(this)
    }

    handleClick1(event){
        console.log("clickd1",event)
        this.setState({name:"test"})
    }
    handleClick2(event){
        console.log("clickd2",event)
        this.setState({name:"test"})
    }

    handleClick3(event){
        console.log("clickd3",event)
        this.setState({name:"test"})
    }

    handleClik4 = (event)=>{
        console.log("clickd4",event)
        this.setState({name:"test"})
    }

    render(){
        return(
            <div>
                <h1>hello I am is user component {this.state.name}</h1>
                <button onClick={this.handleClick1}>Click1</button>
                <button onClick={this.handleClick2.bind(this)}>Click2</button>
                <button onClick={(event)=>this.handleClick3(event)}>Click3</button>
                <button onClick={this.handleClik4}>Click4</button>
            </div>
        )
    }
}

export default User