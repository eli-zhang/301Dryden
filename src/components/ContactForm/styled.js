
import styled from 'styled-components';
import { accentColor } from '../../constants';

export const ContactTitle = styled.h1`
  color: ${accentColor};
  font-size: 4.2rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  float: left;
  width: 50%;
  margin: 320px 10px 10px 10px;
`

export const FormContainer = styled.div`
  position: absolute;
  top: 35%;
  right: 15%;
  margin: auto;
  width: 40%;
  align-content: center;
`

export const SubmitButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: ${accentColor};

  border: 1px solid ${accentColor};
  padding: 5px 10px;
  font-size: 1rem;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

  transition: background-color 0.5s ease;

  &:hover {
      cursor: pointer;
      background-color: white;
  }
  margin: auto;
`