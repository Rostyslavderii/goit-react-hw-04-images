import React from 'react';
// import PropTypes from 'prop-types';
// // import styles from './Feedback.module.scss';
// import cn from 'classnames';

function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      <button
        onClick={() => onLeaveFeedback('good')}
        // className={cn(styles.good)}
        // key={options.good}
      >
        Good
      </button>{' '}
      <button
        onClick={() => onLeaveFeedback('neutral')}
        // className={cn(styles.Neural)}
      >
        Neutral
      </button>{' '}
      <button
        onClick={() => onLeaveFeedback('bad')}
        // className={cn(styles.Bad)}
      >
        Bad
      </button>
    </>
  );
}

export default FeedbackOptions;
