import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  min-width: 600px;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 10px;
  background-color: #e63c22;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  max-width: 50px;
  width: 100%;
  align-self: center;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 16px #662d24;
    background-color: #b32d19;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #662d24;
  }

  &:active {
    transform: scale(0.95);
  }
`;