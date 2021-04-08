import express from 'express';
import rankingRoutes from './modules/ranking/routes.js';
import userRoutes from './modules/user/routes.js';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/ranking', rankingRoutes);

export default router;
