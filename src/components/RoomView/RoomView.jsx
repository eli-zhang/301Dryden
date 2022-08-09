import React, { useEffect } from 'react';
import PhotoCarousel from './PhotoCarousel';
import { Title, ImagesBackgroundRect, RoomTextContainer, 
    PreviewImage, HeaderContainer, Description, Text, InterestButtonContainer, EmptyButton,
    AboutTitle, AboutPrice, AboutDescription } from './styled';
import { Link } from "react-router-dom";


const floorNumberToAdjective = (number) => {
    const hundredsPlace = Math.floor(number / 100);
    switch(hundredsPlace) {
        case 1: return "first";
        case 2: return "second";
        case 3: return "third";
        default: return "first";
    }
}

const RoomView = ({ id, room }) => {
    return (
        <HeaderContainer>
            {/* <PreviewImage src={preview} /> */}
            <ImagesBackgroundRect/>
            <PhotoCarousel roomId={id} images={ room.images.map((image) => { return image.url }) } />
            <RoomTextContainer>
                <AboutTitle>Room {id}</AboutTitle>
                <AboutPrice>${room.price || '?'} / mo</AboutPrice>
                <AboutDescription>
                    This room is on the {floorNumberToAdjective(id)} floor of our student house. 
                    It comes furnished with a full-sized bed, desk, closet, lamp, and drawers. 
                    <br/><br/>All utilities are included. Downstairs, there is a kitchen, lounge, and in-house laundry. 
                    
                </AboutDescription >
                <InterestButtonContainer>
                    <Link to={"/contact"} state={ { id } } style={{ textDecoration: 'none' }}>
                        <EmptyButton>
                            Request this room
                        </EmptyButton>
                    </Link>
                </InterestButtonContainer>
            </RoomTextContainer>
        </HeaderContainer>
    );
}

export default RoomView;