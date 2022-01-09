/* eslint-disable no-underscore-dangle */
import express, { json, urlencoded } from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
import routes from './routes';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/*
Middlewares
*/

// Expose running mode in res.locals
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
app.use('/scss', express.static(join(__dirname + 'src/assets/scss')));
app.use('/js', express.static(join(__dirname + 'src/assets/js')));

// Routes
app.use(routes);

export default app;
