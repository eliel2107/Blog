// components/Loading.tsx
import React from "react";
import styles from "./loading.module.scss"; // Estilize o componente conforme necessário

export const Loading = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loader}></div>
    </div>
  );
};
