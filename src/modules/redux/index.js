/**
 * Redux Library
 */
import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxPromise from 'redux-promise-middleware';
// import logger from "redux-logger";

// Redux Persist Library
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


/**
 * reducers
 */
import auth from './auth/reducer';
import books from "./books/reducer";

// Combine The Reducers
const reducer = combineReducers({
  auth,
  books,
})

/**
 * PersistConfig
 */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    "auth",
    "books",
  ]
}

const persistedReducer = persistReducer(persistConfig, reducer);

/**
 * store
 */
export const store = createStore(
  persistedReducer,
  applyMiddleware(reduxPromise)
  // applyMiddleware(reduxPromise, logger)
);

/**
 * dispatcher
 */
export * from './auth/actions';
export * from './books/actions';

/**
 * selector
 */
// export * from './post/selector';
// export * from './profile/selector';