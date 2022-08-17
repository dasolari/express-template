/* eslint-disable no-underscore-dangle */
import express, { json, urlencoded } from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
import middleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import assets from './assets';
import ssrRoutes from './handlers/ssr/routes';
import apiRoutes from './handlers/api/routes';

/*
  App Configuration
*/

const app = express();
const developmentMode = app.get('env') === 'development';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compiler = webpack(webpackConfig);

// Set views engine
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*
  Middlewares
*/

// Expose running mode in res.locals
app.use((req, res, next) => {
  res.locals.env = app.get('env');
  next();
});

// Body parser middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Use cookie parser
app.use(cookieParser('super secret cookie key'));

// Define layout for views
app.use(expressLayouts);

// Configure views and assets
app.use(assets(developmentMode));
app.use(middleware(compiler, {}));

// Set the public folder for production
app.use(express.static(join(__dirname, '..', 'build')));

// Routes
app.use(ssrRoutes);

// Api Routes
app.use('/api', apiRoutes);

export default app;
