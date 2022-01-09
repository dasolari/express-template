import express, { json, urlencoded } from 'express';
import { join } from 'path';
import expressLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
import routes from './routes';

const app = express();

/*
Middlewares
*/

// Expose running mode in ctx.state
app.use((req, res, next) => {
  res.locals.env = res.app.env;
  next();
});

// Body Parser Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Cookies
app.use(cookieParser('super secret cookie key'));

// Define layout use
app.use(expressLayouts);

// Views engine
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set the public folder
app.use(express.static('public'));
// app.use('/css', express.static(path.join(__dirname + 'public/css')));
// app.use('/js', express.static(path.join(__dirname + 'public/js')));

// Routes
app.use(routes);

export default app;
