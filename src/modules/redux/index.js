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
import event from './events/reducer';

// Combine The Reducers
const reducer = combineReducers({
  event,
})

/**
 * PersistConfig
 */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    "event",
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
export * from './events/actions';

/**
 * selector
 */
// export * from './post/selector';
// export * from './profile/selector';