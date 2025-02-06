import { RULES_ITEMS } from "@/features/rules/fsd-rules/config";
import { CONCEPT_ITEMS } from "@/features/rules/fsd-concept/config";
import styles from "../style.module.css";

const FsdRules = () => {
  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.title}>📌 FSD 아키텍처 규칙</h2>
        <ul className={styles.list}>
          {RULES_ITEMS.map(({ id, emoji, title, desc }) => (
            <li key={id} className={styles.item}>
              <span className={styles.emoji}>{emoji}</span>
              <span className={styles.text}>
                <span className={styles.highlight}>{title}</span> – {desc}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={styles.title}>📦 Slice 내부 구조 (Segment)</h2>
        <ul className={styles.list}>
          {CONCEPT_ITEMS.map(({ id, emoji, title, desc }) => (
            <li key={id} className={styles.item}>
              <span className={styles.emoji}>{emoji}</span>
              <span className={styles.text}>
                <span className={styles.highlight}>{title}</span> – {desc}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FsdRules;
