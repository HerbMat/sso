import {ParamsDictionary} from "express-serve-static-core"
import {Request, Response} from "express";
import AuthService from "../services/AuthService";
import TokenService from "../services/TokenService";

export default class AuthController {
    private authService: AuthService;
    private tokenService: TokenService;

    constructor(authService: AuthService, tokenService: TokenService) {
        this.authService = authService;
        this.tokenService = tokenService;
    }

    public authorize(req: Request<ParamsDictionary>, res: Response): void {
        const user = req.body as User;
        if (this.authService.isUserValid(user)) {
            res.send({access_token: this.tokenService.generateAccessToken(user.username)});
            return;
        }
        res.status(401).send();
    }

    public verify(req: Request<ParamsDictionary>, res: Response): void {
        res.send(this.tokenService.validateAccessToken(req.body.token))
    }

    public getSecret(req: Request<ParamsDictionary>, res: Response): void {
        res.send({secret: this.tokenService.getSecret()})
    }
}
