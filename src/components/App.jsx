import { Component } from 'react';
// import styles from './Feedback.module.scss';
// import cn from 'classnames';
import { Statistics } from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions ';
import { Section } from './Section/Section';
import { Notification } from './Notification ';
import Form from './Form';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedback: 0,
  };

  onLeaveFeedback = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
    // this.countTotalFeedback();
    // this.countPositiveFeedbackPercentage();
    //
  };

  render() {
    const { good, neutral, bad } = this.state;
    const message = 'There is no feedback';
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {good === 0 && neutral === 0 && bad === 0 ? (
            <Notification message={message} /> //true?
          ) : (
            <Statistics value={this.state} /> //false?
          )}
          {/* {<Notification message={message} /> || this.onLeaveFeedback()}
          {to && (<Statistics value={this.state} />)} */}
        </Section>
        <Form />
      </>
    );
  }
}

export { App };

// handleIncrementgood = e => {
//   // if (this.state.count >= 100) return;
//   this.setState(prevState => {
//     console.log(e.currentTarget);
//     return {
//       good: prevState.good + 1,
//     };
//   });
//   this.countTotalFeedback();
//   this.countPositiveFeedbackPercentage();
// };

// countTotalFeedback = e => {
//   this.setState(prevState => {
//     console.log(e.currentTarget);
//     return {
//       total: prevState.good + prevState.neutral + prevState.bad,
//     };
//   });
// };

// countPositiveFeedbackPercentage = e => {
//   this.setState(prevState => {
//     console.log(e.currentTarget);
//     return {
//       feedback: Math.round((prevState.good * 100) / prevState.total),
//     };
//   });
// };
