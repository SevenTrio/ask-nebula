import { FC } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.chevron}
        src="/chevron.svg"
        alt="Chevron Icon"
        width={24}
        height={24}
      />
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
