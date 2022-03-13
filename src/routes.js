import { Router } from 'express';
import index from './routes/index';
import hello from './routes/hello';

const router = Router();

router.use(async (req, res, next) => {
  next();
});

router.use('/', index);
router.use('/hello', hello);

export default router;
