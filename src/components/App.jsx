import React from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from "./Notification/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  
}
handleStat = (e) => {
  const key = e.currentTarget.textContent
  this.setState(prevState => ({ [key]: prevState[key] + 1 }));
};

 render() {
  const {good, bad, neutral} = this.state
  const countTotalFeedback = good + bad + neutral;
  
  const countPositiveFeedbackPercentage = Math.round(good * 100 / countTotalFeedback);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
        options={Object.keys(this.state)}
        onleaveFeedback={this.handleStat}
        />
       
      </Section>
      {countTotalFeedback === 0 ? 
      <Section><Notification message="There is no feedback"></Notification></Section> :
      <Section title="Statistics">
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      ></Statistics>
      </Section>}
    </div>
  );
}
}

export default App
