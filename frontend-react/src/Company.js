import React from "react";

class Company extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            companyAddress:"hyd",
        }
    }
    render(){
        return(
            <div>
                <h1>hello from calss based component My Company name is {this.props.company} {this.state.companyAddress}</h1>
            </div>
        )
    }
}

export default Company