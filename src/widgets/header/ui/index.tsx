import { Logo } from "./logo";
import { Nav } from "./nav";

import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Logo />
        </div>
        <div className={styles.row}>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
