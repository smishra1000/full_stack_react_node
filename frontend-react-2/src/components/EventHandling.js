import React from "react";
class EventHandling extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: 20,
    };

    this.incrementAge1 = this.incrementAge1.bind(this)//
  }
  incrementAge1(e) {
    console.log("incrementing age")
    console.log(this.state.age)
    //this.setState({age:this.state.age+1})
  }

  incrementAge2(){
    console.log(this)
    console.log(this.state.age)
  }
  render() {
    return (
      <div>
        <h1>Event handling demo</h1>
        <h1>Age: {this.state.age}</h1>
        <button  onClick={this.incrementAge1}>Increment Age1</button>
        <button onClick={this.incrementAge2.bind(this)}>increment2</button>
        {/* //<button onclick="show()"></button> */}
      </div>
    );
  }
}

export default EventHandling;
