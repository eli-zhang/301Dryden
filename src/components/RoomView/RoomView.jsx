import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import { PreviewImage, Container, Description, Text } from './styled';

const RoomView = ({ id }) => {
    const preview = require(`../../images/room${id}/room${id}-1.jpg`);

    return (
        <div>

            {/* <Title> Room {id} </Title> */}
            <div style={{ margin: '10px' }}>
                {/* <PreviewImage src={preview} /> */}
                <PhotoCarousel roomId={id} />
                <Description>
                    <Text> Available </Text>
                    <Text> Price: $1000/month </Text>
                    <Text> 150 sq.ft </Text>
                </Description >
            </div>
        </div >
    );
}

export default RoomView;