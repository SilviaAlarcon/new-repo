import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  //Formatear email, trim para eliminar espacios, toLowerCase para pasarlo todo a minusculas
  const formattedEmail = (email).trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });//no podemos mandar @, tenemos que convertirla a un formato más binario
  return `${base}${hash}`;
};

export default gravatar;

