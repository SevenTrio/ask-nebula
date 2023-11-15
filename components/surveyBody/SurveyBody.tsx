import { FC } from 'react';
import classNames from 'classnames';
import { useTemplate } from '@/hooks/useTemplate';
import styles from './SurveyBody.module.css';

export interface SurveyBodyProps {
  header: string;
  description?: string;
  isInformation: boolean;
}

const informationScreenStyles = (
  <style jsx global>{`
    :root {
      --page-background: var(--secondary-background);
      --page-typography-color: var(--secondary-typography-color);
      --image-filter: invert(1);
    }
  `}</style>
);

export const SurveyBody: FC<SurveyBodyProps> = ({
  header,
  description,
  isInformation,
}) => {
  const parsedHeader = useTemplate(header);

  const bodyStyles = classNames(styles.surveyBody, {
    [styles.surveyBodyInformation]: isInformation,
  });

  return (
    <div className={bodyStyles}>
      <h2>{parsedHeader}</h2>
      {description && <p>{description}</p>}
      {isInformation && informationScreenStyles}
    </div>
  );
};
