import { configureStore } from '@reduxjs/toolkit';
import selfQuizReducer from './slice';

export default configureStore({
  reducer: selfQuizReducer,
});
