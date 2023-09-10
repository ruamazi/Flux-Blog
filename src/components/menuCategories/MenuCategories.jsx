import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href="/blog?cat=style" className={`${styles.category} style`}>
        Style
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} food`}>
        food
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} coding`}>
        Coding
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} culture`}>
        Culture
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} travel`}>
        travel
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} fashion`}>
        fashion
      </Link>
    </div>
  );
};

export default MenuCategories;
