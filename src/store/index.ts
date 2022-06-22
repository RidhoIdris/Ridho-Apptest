import thunk from 'redux-thunk';
import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from 'redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import {Dispatch} from 'react';
import contactReducers from './Contact/contact.reducer';

const rootReducer = combineReducers({
  contact: contactReducers,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

const persistor = persistStore(store);

export const purgingState = async () => {
  try {
    await persistor.purge();
  } catch (error) {
    // alert('error purging state');
  }
};

// purgingState();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch | Dispatch<any>;

export {store, persistor};
