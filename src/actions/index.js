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