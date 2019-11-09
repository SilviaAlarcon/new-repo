import fs from 'fs';

require('dotenv').config();

const getManifest = () => {
  try { //agregamos try para prevenir errores
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV !== 'development') {
      return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8')); //leer un archivo y parcearlo a un json, recibe la ruta donde esta manifest
    }
  } catch (err) {
    console.log(err);
  }
};

export default getManifest;
