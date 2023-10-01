import { styled } from 'styled-components';
import { Form } from 'formik';

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin-bottom: 40px;
  background-color: #f2d044;

  /* border: 1px solid rgba(64, 52, 6, 0.1); */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const InputStyled = styled.input`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  border: none;
  outline: 1px transparent;
  border-radius: 4px;
  width: 320px;
  height: 46px;

  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease,
    outline 0.3s ease;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease,
    outline 0.3s ease;
  max-width: 80px;
  width: 100%;
  align-self: center;

  &:hover {
    transform: scale(1.02);
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
