import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  animation: ${props => (props.shouldpulsate ? pulseAnimation : 'none')} 1.5s infinite;
`;