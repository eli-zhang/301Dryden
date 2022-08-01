
import styled from 'styled-components';
import { accentColor } from '../../constants';

export const ContactContainer = styled.div`
    margin-top: 30px;
    position: relative;
    height: 600px;
`
export const ContactBackgroundRect = styled.div`
    position: absolute;
    top: 10%;
    background-color: #F3F3F3;
    height: 700px;
    display: block;
    width: 70%;
    right: 0;
    z-index: -1;
`;

export const ContactTitle = styled.h1`
  color: ${accentColor};
  font-size: 2.5rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 25px;
  // text-align: center;
  // float: left;
  // width: 50%;
  // margin: 320px 10px 10px 10px;
`

export const ContactMessage = styled.p`
  color: #333333;
  font-size: 1rem;
  font-family: 'Cardo', serif;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 25px;
`

export const FormContainer = styled.div`
  // position: absolute;
  // top: 35%;
  // right: 15%;
  // float: right;
  // margin: auto;
  width: 40%;
  // align-content: center;
  flex: 3 1 auto;
`

export const SubmitButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: ${accentColor};

  border: 1px solid ${accentColor};
  padding: 10px 30px;
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
  margin-top: 5px;
`

export const ConfirmationContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

export const ConfirmationText = styled.p`
  color: #333333;
  font-size: 1rem;
  font-family: 'Cardo', serif;
  font-weight: 400;
  line-height: 1.6;
`

export const ConfirmationHeader = styled.h3`
  color: ${accentColor};
  font-size: 3.2rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 20px;
`