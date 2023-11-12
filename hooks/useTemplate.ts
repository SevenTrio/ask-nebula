import template from 'lodash.template';
import { useAppSelector } from '@/app/hooks';
import { selectSurvey } from '@/features/survey/surveySlice';
import { capitalize } from '@/utils/typography';

export const useTemplate = (string: string) => {
  const answers = useAppSelector(selectSurvey);
  const compile = template(string);

  return capitalize(compile(answers));
};
