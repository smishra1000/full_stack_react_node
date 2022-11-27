import React from "react";

class Child extends React.Component{
    constructor(props){
        console.log("i am in child constructor")
        super(props)
        this.state={}
    }

    static getDerivedStateFromProps(props){
        console.log(props)
        console.log(" i am in child getDerivedStateFromProps")
        return {}
    }

    shouldComponentUpdate(){
        console.log("i am in child shouldcomponnetupdate")
        return true;
    }

    componentDidMount(){
        console.log("i am in child componentdimount")
    }

    getSnapshotBeforeUpdate(props,state){
       
        console.log("i am in child getSnapshotBeforeUpdate")
        console.log(props,state)
        return props
    
    }
    componentDidUpdate(props){
        console.log("i am in child componentDidUpdate")
        console.log("",this.props)
    }

    componentWillUnmount(){
        // prompt("your form is unsaved please complete it")
        console.log("i am unmounting")
    }

    render(){
        console.log("i am in child render")
        return(
            <div>
                <h1>I am in child count {this.props.count}</h1>
            </div>
        )
    }
   
}

export default Child