import styled from "styled-components";

export const ContactContainer = styled.div`
    margin: 80px 150px;
    display: flex;
    justify-content: center;

    /* // position: relative; */
    /* // height: 600px; */
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

export const ContactInfoContainer = styled.div`
  flex: 1 1 auto;
  /* // display: flex; */
`

export const ContactInfoHeader = styled.div`
  color: #333333;
  font-size: 1rem;
  font-family: 'Cardo', serif;
  font-weight: 600;
  line-height: 1.2;
  grid-column: 1 / 2;
`

export const ContactInfoMessage = styled.div`
  color: #333333;
  font-size: 1rem;
  font-family: 'Cardo', serif;
  font-weight: 500;
  line-height: 1.2;
  grid-column: 2 / 2;
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  gap: 10px;
`