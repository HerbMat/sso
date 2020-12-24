import express, {Request, Response} from 'express';
import {authController} from '../controllers';

export const router = express.Router({
    strict: true
});

router.post('/token', (req: Request, res: Response) => {
    authController.authorize(req, res);
});

router.put('/verify', (req: Request, res: Response) => {
    authController.verify(req, res);
});

router.get('/secret', (req: Request, res: Response) => {
    authController.getSecret(req, res);
});
