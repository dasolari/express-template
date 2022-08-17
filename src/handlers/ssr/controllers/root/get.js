import { get } from '../../../../services/root';

const getRoot = async (req, res) => {
  const welcome = get();
  res.render('index', {
    welcome,
  });
};

export default getRoot;
