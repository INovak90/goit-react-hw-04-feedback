import { useState } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './Container.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const feedback = {
    good,
    bad,
    neutral,
  };
  const countTotalFeedback = good + bad + neutral;
  const countPositiveFeedbackPercentage = countTotalFeedback
    ? Math.round((good / countTotalFeedback) * 100)
    : '0';
  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  return (
    <div className={css.container}>
      <Section>
        <ul className={css['list-button']}>
          <FeedbackOptions
            options={feedback}
            onLeaveFeedback={onLeaveFeedback}
          />
        </ul>
        {countTotalFeedback !== 0 ? (
          <Statistics
            options={feedback}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
