const index = async (req, res) => {
  res.render('index', {
    welcome: 'Welcome to this Express + Prisma template',
  });
};

export default {
  index,
};
