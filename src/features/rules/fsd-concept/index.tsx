import React from "react";
import styles from "../style.module.css";
const FsdConcept = () => {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>Next.js + FSD Boilerplate</h1>
        <p className={styles.description}>
          시작하려면 `src/app/page.tsx` 파일을 수정해주세요.
        </p>
      </section>

      <section className={styles.info}>
        <a
          className={styles.link}
          href="https://feature-sliced.design/kr/docs/guides/tech/with-nextjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          📚 문서 읽기
        </a>
      </section>

      <section className={styles.warning}>
        <p>⚠️ root에 있는 `app`, `pages` 디렉토리는 절대 삭제하지 마세요!</p>
      </section>
    </main>
  );
};

export default FsdConcept;
