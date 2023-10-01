import React, { Component } from 'react';
import './progressbarr.css'
class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progressValue: 45,
    };
  }

  // componentDidMount() {
  //   // Simulate progress by incrementing the value over time
  //   this.progressInterval = setInterval(() => {
  //     if (this.state.progressValue < 100) {
  //       this.setState((prevState) => ({
  //         progressValue: prevState.progressValue + 1,
  //       }));
  //     } else {
  //       clearInterval(this.progressInterval);
  //     }
  //   }, 100); // Update every 100 milliseconds (adjust as needed)
  // }

  componentWillUnmount() {
    clearInterval(this.progressInterval);
  }

  render() {
    return (
      <div>
        <h2>Progress Bar Example</h2>
        <progress max="100" value={this.state.progressValue} />
        <p>{this.state.progressValue}%</p>
      </div>
    );
  }
}

export default ProgressBar;
