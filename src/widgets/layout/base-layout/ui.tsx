import React, { FC } from "react";
import styles from "./style.module.css";
import { Header } from "@/widgets/header";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default BaseLayout;
