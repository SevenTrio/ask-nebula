import { FC } from 'react';
import classNames from 'classnames';
import { useStore } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@/app/store';
import { useAppDispatch } from '@/app/hooks';
import { Button } from '@/components/button';
import { saveAnswer, selectSurvey } from '@/features/survey/surveySlice';
import { useTemplate } from '@/hooks/useTemplate';
import { SurveyPageProps } from '@/pageComponents/survey/Survey.types';
import { Action } from '@/types/survey';
import styles from './Survey.module.css';

const specialPageStyles = (
  <style jsx global>{`
    :root {
      --page-background: var(--secondary-background);
      --page-typography-color: var(--secondary-typography-color);
      --image-filter: invert(1);
    }
  `}</style>
);

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
  const store = useStore<RootState>();
  const router = useRouter();
  const parsedHeader = useTemplate(header);

  const handleAnswer = (action: Action) => {
    if (saveAnswerTo) {
      const answer = action.value ?? action.title;
      dispatch(saveAnswer({ saveAnswerTo, answer }));
    }

    if (nextPage) {
      router.push(`/survey/${nextPage}`);
    } else if (nextPageCondition) {
      const { fieldToCompare, variants } = nextPageCondition;

      const answers = selectSurvey(store.getState());
      const answerToCompare = answers[fieldToCompare];
      if (answerToCompare === undefined) return;

      const nextPageFromCondition = variants[answerToCompare.toString()];
      if (!nextPageFromCondition) return;

      router.push(`/survey/${nextPageFromCondition}`);
    }
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentContainer}>
        {isSpecialPage && specialPageStyles}
        <div
          className={classNames(styles.textContainer, {
            [styles.textContainer__special]: isSpecialPage,
          })}
        >
          <h2>{parsedHeader}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className={styles.actionsContainer}>
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
