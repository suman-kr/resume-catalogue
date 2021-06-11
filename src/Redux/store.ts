import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunkMiddleware from "redux-thunk";

import rootReducer from "./Reducers"; // Root reducer

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const store = createStore(
  persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
  compose(applyMiddleware(thunkMiddleware)) // add any middlewares here
);

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };
