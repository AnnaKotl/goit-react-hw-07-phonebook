import styled from 'styled-components';

export const FilterInput = styled.input`
  padding: 16px;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  min-width: 360px;
  min-height: 50px;
  width: 100%;
  outline: none;
  transition: 
    transform 0.3s ease, 
    box-shadow 0.3s ease,
    border 0.3s ease,
    outline 0.3s ease;
  ;

  &:hover {
    border: 1px solid #a8890d;
  }

  &:focus {
    outline: none;
    border: 1px solid #a8890d;
    box-shadow: 0 0 0 2px #a8890d;
  }
`;
