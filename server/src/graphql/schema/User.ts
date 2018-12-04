import { gql } from 'apollo-server';
import { plainToClass } from 'class-transformer';
import UserManager from '../../arango/manager/UserManager';
import FileManager from '../../arango/manager/FileManager';
import CommentManager from '../../arango/manager/CommentManager';
import User, { IUser } from '../../arango/schema/User';

export const typeDefs = gql`
    extend type Query {
        user(_key: ID!): User
        users: [User]
    }

    extend type Mutation {
        addUser(data: UserInput!): User
    }

    input UserInput {
        username: String!
        name: String!
        email: String!
        password: String!
    }

    type User {
        _key: ID!
        date: String!
        username: String!
        name: String!
        email: String!
        files: [File]
        comments: [Comment]
    }
`;

export const resolvers = {
    Query: {
        user: async (_:any, { _key } : { _key: string }) => UserManager.find(_key),
        users: async () => UserManager.findAll(),
    },
    User: {
        files: async (user: IUser) => FileManager.getUserFiles(user._key),
        comments: async (user: IUser) => CommentManager.getUserComments(user._key),
    },
    Mutation: {
        addUser: async (_:any, { data } : { data: IUser }) => UserManager.save(plainToClass(User, data)),
    },
};