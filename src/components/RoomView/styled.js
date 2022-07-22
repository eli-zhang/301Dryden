import styled from 'styled-components';
import { accentColor } from '../../constants';

export const Container = styled.div`
  margin: auto;
  width: 50%;
  padding: 30px;
  // background: #5C5C5C;
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
  width: 100%;
  margin: auto;
  max-height: 500px;
  object-fit: cover;

`