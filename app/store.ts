import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import surveyReducer from '@/features/survey/surveySlice';

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
