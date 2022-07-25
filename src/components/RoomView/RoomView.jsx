import React from 'react';
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

const prices = { 101: 995, 102: 965, 103: 935, 104: 950, 105: 995, 106: 975,
                201: 995, 202: 975, 203: 950, 204: 995, 205: 950, 
                301: 895, 302: 895, 303: 855, 304: 910 }

const getPriceForRoom = (number) => {
    return prices[number] || '?';
}

const RoomView = ({ id }) => {
    const preview = require(`../../images/room${id}/room${id}-1.jpg`);

    return (
        <HeaderContainer>
            {/* <PreviewImage src={preview} /> */}
            <ImagesBackgroundRect/>
            <PhotoCarousel roomId={id} />
            <RoomTextContainer>
                <AboutTitle>Room {id}</AboutTitle>
                <AboutPrice>${getPriceForRoom(id)} / mo</AboutPrice>
                <AboutDescription>
                    This room is on the {floorNumberToAdjective(id)} floor of our student house. 
                    It comes furnished with a full-sized bed, desk, closet, lamp, and drawers. 
                    <br/><br/>All utilities are included. Downstairs, there is a kitchen, lounge, and in-house laundry. 
                    
                </AboutDescription >
                <InterestButtonContainer>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
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