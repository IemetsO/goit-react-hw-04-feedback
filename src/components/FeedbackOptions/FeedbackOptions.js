import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onleaveFeedback }) => {
  return (<div> {options.map(Option =>(
    <button type="button" className={s.button} onClick={onleaveFeedback} key={Option}>
      {Option}
    </button>))}
    </div>
  );
};


export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onleaveFeedback: PropTypes.func.isRequired,
};
