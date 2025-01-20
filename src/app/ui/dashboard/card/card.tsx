import React, { ReactNode } from "react";
import styles from "./card.module.css";

interface CardProps {
  icon: ReactNode;
  title: string;
  score: number;
  info: string;
}

export default function Card({
  icon,
  title,
  score,
  info,
}: CardProps): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.textWrapper}>
        <span className={styles.title}>{title}</span>
        <span className={styles.score}>{score}</span>
        <span className={styles.info}>{info}</span>
      </div>
    </div>
  );
}
