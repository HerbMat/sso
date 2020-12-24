import * as jwt from 'jsonwebtoken';
import {TOKEN_SECRET} from '../config/constants'

export default class TokenService {
    public generateAccessToken(username: string): string {
        return jwt.sign({username}, TOKEN_SECRET, {expiresIn: '1800s', notBefore: '0s'})
    }

    public validateAccessToken(token: string): string {
        return jwt.verify(token, TOKEN_SECRET) as string
    }

    public getSecret(): string {
        return TOKEN_SECRET
    }
}
