import React from "react";

class Employee extends React.Component{
    constructor(props){
        console.log(props);
        super(props)
        this.state = {
            name:"sameer",
            age:"20",
            salary:"30000",
            comapnyName:props.company,
            changeName:""
        }
        // this.changeName = this.changeName.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    changeName(){
        console.log(this.state.name);
        this.setState({name:this.state.changeName})
        this.setState({changeName:""})
        this.props.add();
    }
    handleChange(event){
        this.setState({changeName:event.target.value})

    }

    render(){
        return(
            <div>
                <h1>Name of employe: {this.state.name}</h1>
                <h1>Age :{this.state.age}</h1>
                <h1>Salary:{this.state.salary}</h1>
                <h1>CompanyName={this.props.company}</h1>
                <input type="text" value={this.state.changeName} onChange={this.handleChange}/>
                <button onClick={this.changeName.bind(this)}>Change Name</button>
            </div>
        )
    }
}

export default Employee