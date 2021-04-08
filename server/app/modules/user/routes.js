import express from 'express';
import response from '../../middlewares/response';
import UserController from './controller';

const router = express.Router();

router.post('/', (req, res) => {
  response(res, UserController.login(req.body));
});

export default router;
