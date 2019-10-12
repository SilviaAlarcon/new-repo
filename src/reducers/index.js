const reducer = (state, action) => {
  //switch nos permite recibir el type, evaluarlo dentro de un caso y saber qué hacer con el estado
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload] //payload es el objeto que vamos a guardar en esta nueva lista
      }
    //default manda el estado siempre como lo encontramos 
    default:
      return state;
  }

};

export default reducer; 