import { Router } from 'express';

const router = Router();

router.get('/index', async (req, res) => {
  res.render('index', {
    welcome: 'Welcome to this Express + Prisma template',
  });
});

export default router;
