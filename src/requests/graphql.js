import { request, gql } from 'graphql-request';

const endpoint = 'https://api-us-east-1.hygraph.com/v2/cl6fbh1f727wm01uq1udia17l/master';

const roomsQuery = gql`
    query getRooms {
        rooms (first: 500) {
            number
            price
            description
            images {
                fileName
                url
            }
        }
    }
`;

export const getRooms = async () => {
    return await request(endpoint, roomsQuery)
}

const getRoomQuery = (roomNumber) => gql`
    query getRooms() {
        room (where: {number:  ${roomNumber}}) {
            number
            price
            description
            images {
                fileName
                url
            }
        }
    }
`;

export const getRoom = async (roomNumber) => {
    return await request(endpoint, getRoomQuery(roomNumber))
}
