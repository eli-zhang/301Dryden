import { request, gql } from 'graphql-request';

const endpoint = 'https://api-us-east-1.hygraph.com/v2/cl6fbh1f727wm01uq1udia17l/master';

const query = gql`
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
    return await request(endpoint, query)
}

