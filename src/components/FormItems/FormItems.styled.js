import styled from 'styled-components';

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding: 20px;
  background-color: #f2d044;

    box-shadow: rgba(0, 0, 0, 0.1) 0px -20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px -10px 10px -5px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonDel = styled.button`
    margin: 4px;
  padding: 8px;
  font-size: 12px;
  background-color: #e63c22;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  width: 60px;
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
