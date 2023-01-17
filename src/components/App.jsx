// import Profile from './components/Profile/Profile';

import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // {[options]:state[options]+1 }

  countTotalFeedback();
  countPositiveFeedbackPercentage();

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="">
        <Statistics good={ } neutral={ } bad={ } total={ } positivePercentage={ }/>
        <FeedbackOptions options={'good', 'neutral', 'bad' } onLeaveFeedback={ } />
        <Notification message="There is no feedback" />
      </Section>
    );
  }
}
