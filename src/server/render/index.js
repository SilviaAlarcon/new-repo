const render = (html) => {
  return (`
<!DOCTYPE html>
<html>
  <head>
    <title>Platzi Video</title>
    <Link rel='stylesheet' href='assets/app.css' type='text/css'></Link>
  </head>
  <body>
    <div id="app">${html}</div>
    <script src='assets/app.js' type='text/javascript'></script>
    <script src='assets/vendor.js' type='text/javascript'></script>
  </body>
</html>
  `);
};

export default render;