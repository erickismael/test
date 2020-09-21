export const actionDatos = valor => dispatch => {
    dispatch({ type: "DATOS", value: valor });
};
export const actionUsuarios = valor => dispatch => {
    dispatch({ type: "USUARIOS", value: valor });
};