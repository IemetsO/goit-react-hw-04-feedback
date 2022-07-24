import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleStat = e => {
    const key = e.currentTarget.textContent;
    switch (key) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };
  
  const totalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / total);

  const total = totalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onleaveFeedback={handleStat}
        />
      </Section>
      {total === 0 ? (
        <Section>
          <Notification message="There is no feedback"></Notification>
        </Section>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      )}
    </div>
  );
}
