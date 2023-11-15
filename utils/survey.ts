import { config } from '@/survey.config';
import { SurveyState } from '@/features/survey/surveySlice';
import {
  NextPageCondition,
  PageConfig,
  Slug,
  SurveyConfig,
} from '@/types/survey';

export const startPage = Object.keys(config)[0];

export const getSurveyConfig = (): SurveyConfig => {
  return config;
};

export const getSurveyPage = (pageSlug?: Slug): PageConfig | null => {
  if (!pageSlug || !config[pageSlug]) {
    return null;
  }

  return config[pageSlug];
};

export const getNextPageFromCondition = (
  nextPageCondition: NextPageCondition,
  answers: SurveyState
): Slug | null => {
  const { fieldToCompare, variants } = nextPageCondition;

  const answerToCompare = answers[fieldToCompare];
  if (answerToCompare === undefined) return null;

  const nextPageFromCondition = variants[answerToCompare.toString()];
  if (!nextPageFromCondition) return null;

  return nextPageFromCondition;
};

export const getNextPage = (
  pageConfig: PageConfig,
  answers: SurveyState
): Slug | null => {
  const { nextPage, nextPageCondition: condition } = pageConfig;

  if (nextPage) return nextPage;

  if (condition) return getNextPageFromCondition(condition, answers);

  return null;
};
