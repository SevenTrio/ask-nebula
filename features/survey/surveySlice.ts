import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { Variable } from '@/types/survey';

export interface SaveAnswerPayload {
  saveAnswerTo: Variable;
  answer: string | boolean;
}

export interface RemoveAnswerPayload {
  answerToRemove: Variable;
}

export type SurveyState = Record<Variable, string | boolean>;

const initialState: SurveyState = {};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    saveAnswer: (state, action: PayloadAction<SaveAnswerPayload>) => {
      const { payload } = action;
      const { saveAnswerTo, answer } = payload;

      state[saveAnswerTo] = answer;
    },
    removeAnswer: (state, action: PayloadAction<RemoveAnswerPayload>) => {
      const { payload } = action;
      const { answerToRemove } = payload;

      delete state[answerToRemove];
    },
  },
});

export const { saveAnswer, removeAnswer } = surveySlice.actions;

export const selectSurvey = (state: RootState) => state.survey;

export default surveySlice.reducer;
