import { combineReducers } from "redux";
import reducersDatos from "./reducers";

const allReducers = combineReducers({
  reducersDatos,
});

const rootReducer = (reducers, action) => {
  return allReducers(reducers, action);
};

export default rootReducer;