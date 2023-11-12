import { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './Button.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isPrimary?: boolean;
}

export const Button: FC<ButtonProps> = ({
  isPrimary,
  children,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={classnames(styles.button, buttonProps.className, {
        [styles['button--secondary']]: !isPrimary,
      })}
    >
      {children}
    </button>
  );
};
