import { Button, FeedbackWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackWrapper>
    {options.map(option => (
    <Button key={option} onClick={() => onLeaveFeedback(option)} feedbacktype={option}>
      {option}
    </Button>
    ))}
  </FeedbackWrapper>
);