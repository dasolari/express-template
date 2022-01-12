import { Router } from 'express';
import index from './routes/index';

const router = Router();

router.use(async (req, res, next) => {
  next();
});

router.use('/', index);

export default router;
