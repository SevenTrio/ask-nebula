import { config } from '@/survey.config';
import { PageConfig, Slug, SurveyConfig } from '@/types/survey';

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
