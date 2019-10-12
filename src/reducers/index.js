const reducer = (state, action) => {
  //switch nos permite recibir el type, evaluarlo dentro de un caso y saber qué hacer con el estado
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload] //payload es el objeto que vamos a guardar en esta nueva lista
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        //Tomamos los Items(estado inicial), y lo transformamos para crear un nuevo arreglo con la condición de que tenga desigualdad, para saber si tenemos o no el item que estamos buscando
        //En caso de que no lo tenga, regresa un arreglo con el elemento que está cumpliendo la condición
        //O sea, cuales están en favoritos(myList) xD 
        myList: state.myList.filter(items => items.id !== action.payload)
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload, //le transmite a user el objeto que está creando en action 
      }
    //default manda el estado siempre como lo encontramos 
    default:
      return state;
  }

};

export default reducer; 