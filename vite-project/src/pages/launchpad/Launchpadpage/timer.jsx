import { Component } from 'react';
import './timerr.css'; // Import the CSS file for styling

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      targetDate: new Date('2023-12-31T23:59:59'), // Set your target date and time here
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTimer = () => {
    const now = new Date();
    const timeRemaining = this.state.targetDate - now;

    if (timeRemaining <= 0) {
      clearInterval(this.interval);
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    this.setState({ days, hours, minutes, seconds });
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="countdown-timer">
        <div className="time-unit">
          <span className="unit-title">Days</span><br />
          <span className="time">{days}</span>
        </div>
        <div className="time-unit">
          <span className="unit-title">Hours</span><br />
          <span className="time">{hours}</span>
        </div>
        <div className="time-unit">
          <span className="unit-title">Minutes</span> <br />
          <span className="time">{minutes}</span>
        </div>
        <div className="time-unit">
          <span className="unit-title">Seconds</span> <br />
          <span className="time">{seconds}</span>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;