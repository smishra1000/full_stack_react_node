import React from "react";
class ChildLifeCycle extends React.Component{
    constructor(props){
        super(props)
        console.log("i am constructor child")
        this.state = {
            childCount:0
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("i am getDerivedStateFromProps child")
        return {childCount:props.count}
    }

    shouldComponentUpdate(){
        console.log("i nam should component in child")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("i am getsnapshot in child")
    }
    componentDidUpdate(){
        console.log("i am component did update- in child")
    }

    render(){
        console.log("i am render child")
        return(
            <div>
                <h1>Lifecycle demo</h1>
            </div>
        )
    }
    componentDidMount(){
        console.log("i am component did mount child")
    }
    
    componentWillUnmount(){
        console.log("hello unmounting from dom")
    }
}

export default ChildLifeCycle