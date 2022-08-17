import { get } from '../../../../services/root';

const getRoot = async (req, res, next) => {
  try {
    const root = get();
    res.json({ root });
  } catch (error) {
    next(error);
  }
};

export default getRoot;
