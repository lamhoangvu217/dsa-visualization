import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProblemStore from './reducer/problemSlice';

const reducer = combineReducers({
  ProblemStore: ProblemStore,
});
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
