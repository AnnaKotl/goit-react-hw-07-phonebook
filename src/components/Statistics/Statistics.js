import { String, Total } from './Statistics.styled.js';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <String>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <Total>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage.toFixed(2)}%</p>
    </Total>
  </String>
);