import { create } from '../../../../services/hello';

const createHello = async (req, res, next) => {
  try {
    const hello = await create(req.body);
    res.json({ hello });
  } catch (error) {
    next(error);
  }
};

export default createHello;
