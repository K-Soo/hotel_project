import express from 'express';
import auth from './auth';
import reservation from './reservation';
const api = express.Router();

api.use('/auth', auth);
api.use('/reservation', reservation);

export default api;
