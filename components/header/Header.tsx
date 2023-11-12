import { FC } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

export const Header: FC = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <header className={styles.header}>
      <button className={styles['back-button']} onClick={handleBackButtonClick}>
        <Image
          className={styles.chevron}
          src="/chevron.svg"
          alt="Chevron Icon"
          width={24}
          height={24}
        />
      </button>
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
