import React from 'react';
import styles from './styles.scss';

export const Link = ({
  href,
  onClick,
  text,
}) => (
  <a
    href={href}
    onClick={onClick}
    className={styles.link}
  >
    {text}
  </a>
);
