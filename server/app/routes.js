import express from 'express';
import rankingRoutes from './modules/ranking/routes.js';

const router = express.Router();

router.use('/ranking', rankingRoutes);

export default router;
