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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const countTotal = this.countTotalFeedback();
    let result = 0;
    if (countTotal > 0) {
      result = Math.round((this.state.good / countTotal) * 100);
    }
    return `${result} `;
  };

  handleIncrement = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const buttons = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        <Notification message="There is no feedback" />
      </div>
    );
  }
}
