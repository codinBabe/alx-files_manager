import { Router } from 'express';
import appController from '../controllers/AppControllers';

const router = Router();

router.get('/status', appController.getStatus);
router.get('/stats', appController.getStats);

export default router;
