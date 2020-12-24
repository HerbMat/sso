import {USER, PASSWORD} from '../config/constants'

export default class AuthService {
    public isUserValid(user: User): boolean {
        return user.username === USER && user.password === PASSWORD
    }
}
