// import Profile from './components/Profile/Profile';

import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  // countTotalFeedback();
  // countPositiveFeedbackPercentage();
  handleIncrement = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {/* <Statistics
          options={this.state}
          total={total}
          positivePercentage={positivePercentage}
        /> */}

        <Notification message="There is no feedback" />
      </div>
    );
  }
}
