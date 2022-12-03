import React from "react"
class Counter extends React.Component{
constructor(props){
    super(props)
    this.state = {
        count:0,
    
    }
    this.increment1 = this.increment1.bind(this)
}

// first syntaxm
increment1(){
    console.log("hello clicked")
    this.setState({count:this.state.count+1})
}
//2nd syntax
increment2(){
    console.log("hello clicked")
    this.setState({count:this.state.count+1})
}

//third syntax
increment3(){
    console.log("hello clicked")
    this.setState({count:this.state.count+1})
}

//4th syntax
increment4 = ()=>{
    console.log("hello clicked")
    this.setState({count:this.state.count+1})
}

    render(){
        return(
            <div>
                <h1>Hello my first react component</h1>

                <h1>Count : {this.state.count}</h1>
                <button onClick={this.increment1}>Increment first method</button>
                <button onClick={this.increment2.bind(this)}>Increment 2nd method</button>
                <button onClick={()=>this.increment3()}>Increment 3rd method</button>
                <button onClick={this.increment4}>Increment 4th method</button>

            </div>
        )
    }
}

export default Counter

