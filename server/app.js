import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
// import cookieParser from 'cookie-parser';

import usersRouter from './router/user.js';

const app = express();

app.use(express.json());
app.use(cors()); // 배포시에는 옵션 신경 써줄 것
app.use(morgan('tiny'));
app.use(helmet());
// app.use(cookieParser());

app.use('/users', usersRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

app.listen(8080);