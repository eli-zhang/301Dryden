import React from 'react';
import { useParams } from 'react-router-dom';
import PhotoCarousel from './PhotoCarousel';
import { Title } from '../../styled';
import { PreviewImage, Container, Description, Text } from './styled';

const RoomView = () => {
    const params = useParams();
    const preview = require(`../../images/room${params.id}/room${params.id}-1.jpg`);

    return (
        <Container>

            <Title> Room {params.id} </Title>
            <div style={{ margin: '10px' }}>
                {/* <PreviewImage src={preview} /> */}
                <PhotoCarousel roomId={params.id} />
                <Description>
                    <Text> Available </Text>
                    <Text> Price: $1000/month </Text>
                    <Text> 150 sq.ft </Text>
                </Description >
            </div>
        </Container >
    );
}

export default RoomView;