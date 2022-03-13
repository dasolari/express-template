import { Router } from 'express';
import hello from '../controllers/hello';

const router = Router();

router.get('/', hello.index);
router.get('/:name', hello.name);
router.post('/', hello.create);

export default router;
