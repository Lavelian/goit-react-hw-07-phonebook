import styled from 'styled-components';
import { Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  & input {
    margin-top: 5px;
    display: block;
    width: 200px;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  display: flex;
  width: 100px;
  margin-top: 10px;
  margin-right: 3px;

  border-radius: 10px;

  border: 1px solid black;
  padding: 3px 3px;

  :hover,
  :focus {
    color: white;
    background-color: red;
  }
`;
