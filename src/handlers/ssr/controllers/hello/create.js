import { create } from '../../../../services/hello';

const createHello = async (req, res) => {
  try {
    await create({ args: req.body });
    res.redirect('/hello');
  } catch (error) {
    res.render('hello/index', {
      error,
      hello: 'Hello ',
      lastHello: undefined,
      submitHelloPath: '/hello',
    });
  }
};

export default createHello;
