import express from 'express';
import cors from 'cors';
import router from './routes.js';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3333;

dotenv.config();

app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));
app.use(router);
app.use('*', (req, res, next) => {
  res.send('Not found');
  next();
});

app.listen(PORT, function () {
  console.log('Started application on port %d', PORT);
});

export default app;
