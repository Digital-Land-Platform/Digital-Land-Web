import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

// We configure our reducers here so that they can be used in the store instance of the application without any issues
// We also export the store instance so that it can be used in the application

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
