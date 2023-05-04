import css from './Fedback.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const getKeys = Object.keys(options);
  return getKeys.map(name => (
    <li key={name}>
      <button
        className={css['feedback-button']}
        onClick={() => {
          onLeaveFeedback(name);
        }}
        type="button"
      >
        {name}
      </button>
    </li>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
