import * as Joi from 'joi';
import Base, { IBase } from './Base';

export enum ROLE {
    ADMIN = 'admin',
}

export interface IUser extends IBase {
    username: string;
    password?: string;
    salt: string;
    name: string;
    email: string;
    roles: Array<ROLE>;
    followingTags: Array<string>;
    pictureKey: string;
}

export default class User extends Base implements IUser {
    username: string;
    password?: string;
    salt: string;
    name: string;
    email: string;
    roles: Array<ROLE>;
    pictureKey: string;
    followingTags: Array<string>;

    constructor() {
        super();
        this.followingTags = [];
    }

    buildSchema() : object {
        return {
            username: Joi.string().alphanum().min(3).max(20).required(),
            password: Joi.string().min(7),
            salt: Joi.string(),
            name: Joi.string().min(3).required(),
            email: Joi.string().email().required(),
            roles: Joi.array(),
            followingTags: Joi.array(),
            pictureKey: Joi.string(),
        };
    }
}
