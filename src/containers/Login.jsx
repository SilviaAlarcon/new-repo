import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = props => {
  //La constate trae dos valores, uno es todo el formulario y el otro permite guardar los valores obtenidos 
  const [form, setValues] = useState({
    email: '',
  })

  //Función que se va a encargar de todos los cambios de los inputs 
  const handleInput = event => {
    setValues({
      ...form,
      //Para obtener de forma dinámica(según el input que este usando) el nombre y el valor 
      [event.target.name]: event.target.value
    })
  }

  //Funcion que se va a encargar de enviar los datos capturados a donde los necesitemos 
  const handleSubmit = event => {
    //Para evitar que el formato que tiene HTML para manejar eventos dentro de un formulario se cumpla(cuando das click en un boton manda los parametros por url y puede crear conflictos )
    event.preventDefault();
    //Envia el form hacia el estado 
    props.loginRequest(form);
    //Nos permite movernos hacia donde sea necesario segun el compartamiento en la app(Estoy es de react router-> BrowserRouter)
    props.history.push('/')
  }

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            //Nos permite escuchar lo que estamos tipeando 
            onChange={handleInput}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div><img src={googleIcon} /> Inicia sesión con Google</div>
          <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta {' '}
          <Link to='/register'>
            Regístrate
          </Link>
        </p>
      </section>
    </section>

  );
}

const mapDispatchToProps = {
  loginRequest,
}

export default connect(null, mapDispatchToProps)(Login); 