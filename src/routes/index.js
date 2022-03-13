import { Router } from 'express';
import index from '../controllers/index';

const router = Router();

router.get('/', index.index);

export default router;
