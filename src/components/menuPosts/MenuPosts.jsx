import React from "react";
import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({ widthImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} travel`}>Travel</span>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Leo Messi</span>
            <span className={styles.date}> - 25.03.1991</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} coding`}>Travel</span>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Leo Messi</span>
            <span className={styles.date}> - 25.03.1991</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} food`}>Travel</span>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Leo Messi</span>
            <span className={styles.date}> - 25.03.1991</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} culture`}>Travel</span>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Leo Messi</span>
            <span className={styles.date}> - 25.03.1991</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
