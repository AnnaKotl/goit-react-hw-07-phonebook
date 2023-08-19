import styled from 'styled-components';

export const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 10px;
`;

const getColor = feedbackType => {
  switch (feedbackType) {
    case 'good':
      return '#4caf50';
    case 'neutral':
      return '#d9b218';
    case 'bad':
      return '#f44336';
    default:
      return '#000';
  }
};

export const Button = styled.button`
  background: ${props => getColor(props.feedbacktype)};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #2c5e2f;
  }

  &:active {
    transform: scale(0.95);
  }
`;