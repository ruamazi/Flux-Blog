import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, data }) => {
  const { title, desc, img, catSlug, createdAt, slug } = data;
  const fixedDate = createdAt.substring(0, 10).split("-").reverse().join("-");
  return (
    <div key={key} className={styles.container}>
      {img && (
        <div className={styles.imgContainer}>
          <Image className={styles.image} src={img} alt="" fill />
        </div>
      )}

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{fixedDate} - </span>
          <span className={styles.category}>{catSlug}</span>
        </div>
        <Link href={`/posts/${slug}`}>
          <h1 className={styles.title}>{title}</h1>
        </Link>

        <p className={styles.desc}>{desc.substring(0, 100)}...</p>
        <Link className={styles.readMore} href={`/posts/${slug}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
