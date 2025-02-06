import React from "react";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import { NAV_ITEMS } from "@/widgets/header/ui/nav/config";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {NAV_ITEMS.map((item) => {
          const isCurrentPage = pathname === item.href;

          return (
            <li className={styles.item} key={item.text}>
              <Link
                className={`${isCurrentPage ? "active" : ""} ${styles.link}`}
                href={item.href}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
