import gql from 'graphql-tag';
import { likeFragment } from './LikeQueries';

export const userFragment = gql`
    fragment userFragment on User {
        _key
        username
        name
        email
        reputation {
            ...likeFragment
        }
    }
    
    ${likeFragment}
`;

export const userQuery = gql`
    query($userKey: ID!) {
        user(_key: $userKey) {
            ...userFragment
        }
    }
    
    ${userFragment}
`;
