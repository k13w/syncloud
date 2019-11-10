import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'syncloud',
    storage,
    whitelist: ['auth', 'user', 'uploads'],
    },
    reducers
  );

  return persistedReducer;
}