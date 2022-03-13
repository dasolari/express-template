import prismaClient from '../prisma/client';

const index = async (req, res) => {
  const hellos = await prismaClient.hello.findMany();
  const hello = hellos.slice(-1)[0];
  res.render('hello/index', {
    hello: 'Hello ',
    lastHello: hello || 'World',
    submitHelloPath: '/hello',
  });
};

const name = async (req, res) => {
  res.render('hello/name', {
    helloName: `Hello ${req.params.name}!`,
  });
};

const create = async (req, res) => {
  try {
    await prismaClient.hello.create({
      data: req.body,
    });
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

export default {
  index,
  name,
  create,
};
