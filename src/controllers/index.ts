import AuthController from './AuthController';
import { authService, tokenService } from "../services";

const authController = new AuthController(authService, tokenService);

export {
    authController
};
