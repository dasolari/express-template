import { get } from '../../../../services/hello';

const getHello = async (req, res) => {
  try {
    const hello = await get();
    res.render('hello/index', {
      hello: 'Hello ',
      lastHello: hello || 'World',
      submitHelloPath: '/hello',
    });
  } catch (error) {
    res.render('error', {
      error,
    });
  }
};

export default getHello;
