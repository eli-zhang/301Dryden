import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
`
export const PreviewImage = styled.img`
  color: white;
  grid-area: img;
  margin: 20px;
  width: 400px;
  float: left;
`;
export const Description = styled.div`
  grid-area: txt;
  margin: 20px;
  text-align: left;
  vertical-align: top;
  display: inline-block;
`
export const Text = styled.p`
    color: black;
    font-weight: 600;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
`
export const CarouselImage = styled.img`
  display: block;
  width: 75%;
  margin: auto;
  max-height: 500px;
  object-fit: cover;

`