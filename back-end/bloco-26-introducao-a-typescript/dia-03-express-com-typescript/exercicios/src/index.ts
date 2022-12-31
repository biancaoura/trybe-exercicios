import express from 'express';
import userRouter from './routes/userRouter';

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/users', userRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));