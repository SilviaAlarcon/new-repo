//payload= información que le vamos a transmitir

export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
});

//Para manejar la información de nuestro login
export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

//Cerrar sesión */
export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

//Registro
export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

//Player
export const getVideoSource = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});
