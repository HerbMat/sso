import AuthService from './AuthService';
import TokenService from './TokenService';

const authService = new AuthService();
const tokenService = new TokenService();

export {
    authService,
    tokenService
};
