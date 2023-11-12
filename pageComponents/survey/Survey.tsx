import { FC } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { store } from '@/app/store';
import { useAppDispatch } from '@/app/hooks';
import { Button } from '@/components/button';
import { saveAnswer, selectSurvey } from '@/features/survey/surveySlice';
import { useTemplate } from '@/hooks/useTemplate';
import { SurveyPageProps } from '@/pageComponents/survey/Survey.types';
import { Action } from '@/types/survey';
import styles from './Survey.module.css';

export const SurveyPageComponent: FC<SurveyPageProps> = ({ pageConfig }) => {
  const {
    actions,
    description,
    header,
    isSpecialPage,
    nextPage,
    nextPageCondition,
    saveAnswerTo,
  } = pageConfig;

  const dispatch = useAppDispatch();
  const router = useRouter();
  const parsedHeader = useTemplate(header);

  const handleAnswer = (action: Action) => {
    if (saveAnswerTo) {
      const answer = action.value ?? action.title;
      dispatch(saveAnswer({ saveAnswerTo, answer }));
    }

    if (nextPage) {
      router.push(`/${nextPage}`);
    } else if (nextPageCondition) {
      const { fieldToCompare, variants } = nextPageCondition;

      const answers = selectSurvey(store.getState());
      const answerToCompare = answers[fieldToCompare];
      if (answerToCompare === undefined) return;

      const nextPageFromCondition = variants[answerToCompare.toString()];
      if (!nextPageFromCondition) return;

      router.push(`/${nextPageFromCondition}`);
    }
  };

  return (
    <div className={styles['content-wrapper']}>
      <div className={styles['content-container']}>
        <div
          className={classNames(styles['text-container'], {
            [styles['text-container--special']]: isSpecialPage,
          })}
        >
          <h2>{parsedHeader}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className={styles['actions-container']}>
          {actions.map((action) => (
            <Button
              isPrimary={isSpecialPage}
              key={action.title}
              onClick={() => handleAnswer(action)}
            >
              {action.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
