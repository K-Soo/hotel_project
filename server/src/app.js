import config from './config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import api from './api/routes';
import cookieParser from 'cookie-parser';
import jwtMiddleware from './api/lib/jwtMiddleware';
import path from 'path';

const { MONGO_URI, PORT } = process.env;
const app = express();

const prod = process.env.NODE_ENV === 'production';

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

//라우터 설정
app.use(jwtMiddleware);
app.use('/api', api);

if (prod) {
  app.use(express.static(path.join(__dirname, '../../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
  });
}
//몽고DB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('MongoDB successfully');
  })
  .catch(e => {
    console.log('mongoDB error', e);
  });

app.use((err, req, res, next) => {
  console.error('에러발생', err);
});
//서버연결
app.listen(PORT, () => {
  console.log(`server port ${PORT} successfully!`);
});
