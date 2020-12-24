import express from 'express';
import { PORT } from './config/constants';
import { authRouter } from './routes';

const app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/oauth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
