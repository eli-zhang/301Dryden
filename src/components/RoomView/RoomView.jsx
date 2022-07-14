import React from 'react';
import { useParams } from 'react-router-dom';

const RoomView = () => {
    let params = useParams();

    console.log("here2")
    return (
        <div>
            <h1> {params.id} </h1>
            <h2> suppp </h2>
        </div>
    );
}

export default RoomView;