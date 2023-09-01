import React, { Component } from 'react'
import './DesignComponent.css'

export default class DesignComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         btnStyle:{
            width : "100px",
            height : "75px",
            border : "2px solid green",
            background : "blue",
            borderRadius: "5px",
            font: "12px"
         }
      }
    }
  render() {
    return (
    <>
      <button>Without CSS</button>
      <button style={this.state.btnStyle}>With CSS</button>
      <button className='button'>Style with Class</button>
      <button type="button" className="btn btn-primary">Primary</button>
    </>
    )
  }
}
