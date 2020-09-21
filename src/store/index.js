import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storageSession from 'redux-persist/es/storage/session'
import rootReducers from "./reducer/index";

const persistConfig = {
  key: "root",
  storage: storageSession,
  timeout: null,
  whitelist: [
    "reducerUsuario",
    "reducerImagenes",
  ],
  blacklist: [
  ]
};

const reducers = persistReducer(persistConfig, rootReducers);
const store = createStore(
  reducers, //Todos los reducers
  {}, //Estado inicial
  applyMiddleware(reduxThunk)
);

export {store};