import React, { Component } from 'react'

export class AboutClass extends Component {

    constructor(props) {
      super(props)
    
      this.state ={
        name : this.props.name,
        work : this.props.work,
        count : 0,
        username : ""
      }
    }
    clickEvent(){
        this.setState({
            name : "About class component",
            count: this.state.count + 1
        })
        console.log("Click Event in class")
    }
    mouseOverEvent(){
        console.log("Mouse over event in class")
    }
    inputChange(event){
        this.setState({
            username : event.target.value
        })
    }
  render() {
    
    return (
      <div>AboutClass
      <br></br>
        <b>Name: {this.state.name}</b> <br></br>
        <b>Work: {this.state.work}</b>  <br></br>
        <b>Count:{this.state.count}</b><br></br>
        <b>Username : {this.state.username}</b><br></br>
        <input onChange={(event)=>this.inputChange(event)}></input><br></br>
        <button onClick={()=>this.clickEvent()} onMouseOver={()=>this.mouseOverEvent()}>Click</button>  

      </div>
    )
  }
}

export default AboutClass