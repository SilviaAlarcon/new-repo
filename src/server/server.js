import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
// import main from './routes/main';
// import helmet from 'helmet';

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();
// app.use(express.static(`${__dirname}/public`));

if (ENV === 'development') {
  console.log('Loading dev config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  }
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} //else {
//   console.log(`Loading ${ENV} config`);
//   app.use(helmet());
//   app.use(helmet.permittedCrossDomainPolicies());
//   app.disable('x-powered-by');
// }

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html>
  <head>
    <title>Platzi Video</title>
    <Link rel='stylesheet' href='assets/app.css' type='text/css'></Link>
  </head>
  <body>
    <div id="app"></div>
    <script src='assets/app.js' type='text/javascript'></script>
    <script src='assets/vendor.js' type='text/javascript'></script>
  </body>
</html>
  `);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server runding on ${PORT}`);
});