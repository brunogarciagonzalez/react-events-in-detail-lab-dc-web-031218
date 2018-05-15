// Code DelayedButton Component Here
import React from "react";

class DelayedButton extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = e => {
    e.persist();
    debugger;
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.clickHandler} />;
  }
}

export default DelayedButton;
