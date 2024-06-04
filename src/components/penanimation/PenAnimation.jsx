"use client";

import React from "react";
import styles from "./penAnimation.module.css";

const PenAnimation = () => {
  return (
    <div className={styles.paper}>
      <div className={styles.penAnimation}>
        <img src="/paper.png" alt="Paper" className={styles.paper} />
        <img
          src="/pencil-solid.svg"
          alt="Pen Icon"
          className={styles.penIcon}
        />
        <div className={styles.textOverlay}>Create a blog in your own way.</div>
      </div>
    </div>
  );
};

export default PenAnimation;
