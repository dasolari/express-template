import { Router } from 'express';
import index from './routes/index';

const router = Router();

router.use('/', index);

export default router;
