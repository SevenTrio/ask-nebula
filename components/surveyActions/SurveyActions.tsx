import { FC } from 'react';
import { Button } from '@/components/button';
import { Action } from '@/types/survey';
import styles from './SurveyActions.module.css';

export interface SurveyActionsProps {
  actions: Action[];
  onAnswer: (option: Action) => void;
}

export const SurveyActions: FC<SurveyActionsProps> = ({
  actions,
  onAnswer,
}) => {
  return (
    <div className={styles.actions}>
      {actions.map((action) => (
        <Button key={action.title} onClick={() => onAnswer(action)}>
          {action.title}
        </Button>
      ))}
    </div>
  );
};
