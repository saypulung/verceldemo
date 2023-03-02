import express, {Request, Response, NextFunction, Express } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const config = {
        port: process.env.PORT,
        app_url: process.env.APP_URL,
        secret: process.env.APP_SECRET,
    }
    res.status(200).json(config);
});

app.listen(process.env.PORT, () => console.log(`Running...${process.env.APP_URL}:${process.env.PORT}`));