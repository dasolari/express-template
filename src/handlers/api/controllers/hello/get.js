import { get } from '../../../../services/hello';

const getHello = async (req, res, next) => {
  try {
    const hello = await get();
    res.json({ hello });
  } catch (error) {
    next(error);
  }
};

export default getHello;
