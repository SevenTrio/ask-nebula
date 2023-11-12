import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { startPage } from '@/utils/surveyConfig';
import styles from './Header.module.css';

export const Header: FC = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  const isStartPage = router.query.slug === startPage;

  return (
    <header className={styles.header}>
      {!isStartPage && (
        <button
          className={styles['back-button']}
          onClick={handleBackButtonClick}
        >
          <Image
            className={styles.chevron}
            src="/chevron.svg"
            alt="Chevron Icon"
            width={24}
            height={24}
          />
        </button>
      )}
      <Image
        className={styles.logo}
        src="/nebula.svg"
        alt="Nebula Logo"
        width={24}
        height={24}
      />
    </header>
  );
};
