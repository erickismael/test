const INITIAL_STATE = {
    datos: [],
    usuarios: [],
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "DATOS":
        return { ...state, datos: action.value };
      case "USUARIOS":
        return { ...state, usuarios: action.value };
    }
    return state;
  };
  