import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Feedback.module.scss';
// import cn from 'classnames';

class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props.value;
    console.log(this.props.value);
    console.log('good:', good);
    return (
      <>
        <h2>Statistics</h2>
        <h3>Good:{good}</h3>
        <h3>Neutral:{neutral}</h3>
        <h3>Bad:{bad}</h3>
        <h3>Total:{good + neutral + bad}</h3>
        <h3>feedback:{Math.round((good / (good + neutral + bad)) * 100)}%</h3>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export { Statistics };
