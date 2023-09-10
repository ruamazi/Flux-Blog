import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}> what is hot? </h2>
      <h3 className={styles.title}>Most popular</h3>
      <MenuPosts widthImage={false} />
      {/* this is comment */}
      <div>
        <h2 className={styles.subtitle}>Discover by topic</h2>
        <h3 className={styles.title}>Categories</h3>
        <MenuCategories />
      </div>

      <h2 className={styles.subtitle}>chosen by the editor</h2>
      <h3 className={styles.title}>Editors Pick</h3>
      <MenuPosts widthImage={true} />
    </div>
  );
};

export default Menu;
