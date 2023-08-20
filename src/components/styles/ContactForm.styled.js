import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  min-width: 360px;
  min-height: 50px;
  width: 100%;
  border: none;
  outline: 1px transparent;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: 1px transparent;
  border-radius: 4px;
  min-width: 360px;
  min-height: 50px;
  width: 100%;
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

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
    transition: 
    transform 0.3s ease, 
    box-shadow 0.3s ease,
    border 0.3s ease,
    outline 0.3s ease;
  ;
  max-width: 200px;
  width: 100%;
  align-self: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px #355936;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #355936;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
