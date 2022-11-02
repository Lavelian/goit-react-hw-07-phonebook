import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
`;
export const Text = styled.p`
  margin-right: 10px;
`;
export const Button = styled.button`
  margin-right: 3px;
  border: 1px solid black;
  padding: 3px 3px;
  border-radius: 10px;
  :hover,
  :focus {
    color: white;
    background-color: red;
  }
`;
