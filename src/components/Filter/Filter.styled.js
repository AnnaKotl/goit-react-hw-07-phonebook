import styled from 'styled-components';

export const FilterInput = styled.input`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-bottom: 10px;
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

export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
`;

export const TitleFilter = styled.h2`
  font-size: 22px;
`;
