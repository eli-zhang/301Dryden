import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import { Title, ImagesBackgroundRect, RoomTextContainer, 
    PreviewImage, HeaderContainer, Description, Text,
    AboutTitle, AboutPrice, AboutDescription } from './styled';

const floorNumberToAdjective = (number) => {
    const hundredsPlace = Math.floor(number / 100);
    switch(hundredsPlace) {
        case 1: return "first";
        case 2: return "second";
        case 3: return "third";
        default: return "first";
    }
}

const RoomView = ({ id }) => {
    const preview = require(`../../images/room${id}/room${id}-1.jpg`);

    return (
        <>
            <HeaderContainer>
                {/* <PreviewImage src={preview} /> */}
                <ImagesBackgroundRect/>
                <PhotoCarousel roomId={id} />
                <RoomTextContainer>
                    <AboutTitle>Room {id}</AboutTitle>
                    <AboutPrice>$975 / mo</AboutPrice>
                    <AboutDescription>
                        This room is on the <b>{floorNumberToAdjective(id)} floor</b> of our student house. 
                        It comes furnished with a full-sized bed, desk, closet, lamp, and drawers. 
                        <br/><br/><b>All</b> utilities are included.
                    </AboutDescription >
                </RoomTextContainer>
            </HeaderContainer>
        </ >
    );
}

export default RoomView;