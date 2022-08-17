/* eslint-disable no-unused-vars */
import { Router } from 'express';
import errorHandler from '../../../../libs/errors/errorHandler';
import rootRoutes from './root';
import helloRoutes from './hello';

const router = Router();

router.use(async (_req, _res, next) => {
  next();
});

router.use('/', rootRoutes);
router.use('/hello', helloRoutes);

router.use(
  (e, req, res, next) => {
    const error = errorHandler(e);
    res.status(error.status).send(error);
  },
);

export default router;
