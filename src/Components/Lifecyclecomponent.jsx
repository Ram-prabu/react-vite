import React, { Component } from 'react'

export class Lifecyclecomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : ""
      }
      console.log("Construction")
      
    }
   // static getDerivedStateFromProps(props,state){
   //     console.log("State is updated with props")
    //    return{
    //        name: props.name
    //    }
    //}
    shouldComponentUpdate(){
        console.log("Component should update")
        return true;
    }
    componentDidMount(){
        console.log("Complete mount")
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Previous props and states")
        console.log(prevProps,prevState)
        return null
    }
    componentDidUpdate(){
        console.log("Component did update")
    }
    clickEvent(){
        console.log("Click event")
        this.setState({
            name: " Update Lifecycle"
        })
    }
  render() {
    console.log("Render updated")
    return (
    <>
      <div>Lifecyclecomponent{this.state.name}</div>
      <button onClick={()=>this.clickEvent()} >Update</button>
    </>
    )
  }
}

export default Lifecyclecomponent