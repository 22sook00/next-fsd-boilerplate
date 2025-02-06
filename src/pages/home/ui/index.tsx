"use client";
import React from "react";
import styles from "./style.module.css";
import FsdConcept from "@/features/rules/fsd-concept";
import FsdRules from "@/features/rules/fsd-rules";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <FsdConcept />
      <FsdRules />
    </div>
  );
};

export default HomePage;
