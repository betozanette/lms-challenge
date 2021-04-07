import express from 'express';
import response from '../../middlewares/response';
import ReportController from './controller';

const router = express.Router();

router.post('/', (req, res) => {
  response(res, ReportController.newRanking(req.body));
});

router.get('/', (req, res) => {
  response(res, ReportController.getRankingByScore());
});

export default router;
