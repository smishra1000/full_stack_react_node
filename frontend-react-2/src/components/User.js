import React from "react";

class User extends React.Component{
    constructor(){
        super()
        this.state = {
            mnae:"ABC",
            age:"20"
        }
    }

    increment(){
        console.log("i am incrementing")
    }
    
    render(){
        return(
            <div>
                <button onClick={this.increment}>Increament</button>
                 <h1>My name is  {this.state.name} age is {this.state.age}</h1>
            </div>
           
            
        )
    }

}

export default User

{/* <button onclick="increment()"> */}