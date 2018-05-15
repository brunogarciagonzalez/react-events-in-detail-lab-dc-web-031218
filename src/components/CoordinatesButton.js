// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  constructor (props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this)
  }
  
  clickHandler = e => {
    e.persist()
    let xCoord = e.clientX;
    let yCoord = e.clientY;
    let arr = [xCoord, yCoord];
    debugger;
    this.props.onReceiveCoordinates(arr)
  }

  render () {
    return (
      <button onClick={this.clickHandler} >Press</button>
    )
  }
}

export default CoordinatesButton;


// let ReactElement = props => {
//   props = {
//     onClick: clickHandler
//   }
//
//
// }
