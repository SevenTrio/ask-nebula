import { FC } from 'react';
import { useStore } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@/app/store';
import { useAppDispatch } from '@/app/hooks';
import { Button } from '@/components/button';
import { SurveyActions } from '@/components/surveyActions';
import { SurveyBody } from '@/components/surveyBody';
import { saveAnswer, selectSurvey } from '@/features/survey/surveySlice';
import { SurveyPageProps } from '@/pageComponents/survey/Survey.types';
import { Action, ScreenType } from '@/types/survey';
import { getNextPage } from '@/utils/survey';
import styles from './Survey.module.css';

export const SurveyPageComponent: FC<SurveyPageProps> = ({ pageConfig }) => {
  const { actions, description, header, screenType, saveAnswerTo } = pageConfig;

  const dispatch = useAppDispatch();
  const store = useStore<RootState>();
  const router = useRouter();

  const isInformation = screenType === ScreenType.INFORMATION;

  const navigateNextPage = () => {
    const answers = selectSurvey(store.getState());
    const nextPage = getNextPage(pageConfig, answers);

    if (nextPage) {
      router.push(`/survey/${nextPage}`);
    }
  };

  const handleAnswer = (action: Action) => {
    if (saveAnswerTo) {
      const answer = action.value ?? action.title;
      dispatch(saveAnswer({ saveAnswerTo, answer }));
    }

    navigateNextPage();
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentContainer}>
        <SurveyBody
          header={header}
          description={description}
          isInformation={isInformation}
        />

        {isInformation ? (
          <Button isPrimary onClick={navigateNextPage}>
            {actions[0]?.title}
          </Button>
        ) : (
          <SurveyActions actions={actions} onAnswer={handleAnswer} />
        )}
      </div>
    </div>
  );
};
