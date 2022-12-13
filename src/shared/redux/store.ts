import {Action, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import whitelist from './whitelist';
import logger from 'redux-logger';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 100000,
  whitelist: whitelist,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(logger);
    return middleware;
  },
  devTools: process.env.NODE_ENV !== 'production',
});
const persistor = persistStore(store);
export {store, persistor as persistor};
export type RootState = ReturnType<typeof store.getState>;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export type AppDispatch = typeof store.dispatch;
