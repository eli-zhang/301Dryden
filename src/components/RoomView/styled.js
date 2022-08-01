import styled from 'styled-components';
import { accentColor } from '../../constants';

export const Title = styled.h1`
  color: #444444;
  font-size: 2rem;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  /* line-height: 1.6; */
  text-align: center;
  /* text-transform: uppercase; */
`

export const ImagesBackgroundRect = styled.div`
  position: absolute;
  top: 0;
  background-color: #F3F3F3;
  height: 600px;
  display: block;
  width: 80%;
  right: 0;
`;

export const HeaderContainer = styled.div`
  /* margin: auto; */
  /* width: 50%;
  margin-left: 30px;
  padding: 30px; */
  /* background: #5C5C5C; */
  position: relative;
  height: 700px;
`

export const PhotoContainer = styled.div`
  position: absolute;
  margin-top: 50px;
  top: 0;
  left: 70px;
  width: 50%;
  height: 400px;
  .slick-list { 
    height: 100%;
    transition: all 0.5s ease-in-out; 
  }
`

export const RoomTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% + 70px);
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 130px;
  /* padding: 20px 40px; */
  /* background-color: white; */
`

export const AboutTitle = styled.span`
  color: ${accentColor};
  font-size: 3.5rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
`

export const AboutPrice = styled.span`
  display: inline-block;
  margin-left: 10px;
  color: ${accentColor};
  font-size: 1rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
`

export const AboutDescription = styled.p`
  color: #333333;
  font-size: 1rem;
  font-family: 'Cardo', serif;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 20px;
`

export const InterestButtonContainer = styled.div`
  display: inline-block;
  margin-top: 15px;
  left: 70px;
`

export const EmptyButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    color: ${accentColor};

    border: 1px solid ${accentColor};
    padding: 15px 20px;
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
`

export const PreviewImage = styled.img`
  color: white;
  grid-area: img;
  margin: 20px;
  width: 400px;
  float: left;
`;

export const CarouselImage = styled.img`
  display: block;
  width: 100%;
  margin: auto;
  max-height: 500px;
  object-fit: cover;
  filter: contrast(80%) saturate(120%);
`