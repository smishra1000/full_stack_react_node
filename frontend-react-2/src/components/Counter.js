import React from "react"
class Counter extends React.Component{
constructor(props){
    super(props)
    this.state = {
        count:0,
        age:20,
        name:"sameer",
        address:"hyd",
        phone:"6436346",
        ages:[20,30,40,60]
    }
}

    render(){
        return(
            <div>
                <h1>Hello my first react component</h1>
                <h1>Count : {this.state.count} Age:{this.state.age}</h1>
                <h1>Ages: {this.state.ages}</h1>
                {this.props.company}
                {this.props.mob}
            </div>
        )
    }
}

export default Counter

