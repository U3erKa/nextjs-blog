import type { FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './alert.module.css';

type Props = {
  children: ReactNode;
  type: 'success' | 'error';
};

const Alert = function ({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
} satisfies FC<Props>;

export default Alert;
