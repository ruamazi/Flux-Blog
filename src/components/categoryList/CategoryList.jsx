import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/categories", {
    cache: "no-store",
  });
  if (!res) {
    throw new Error("failed to fetch data on category list component!");
  }
  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            key={item._id}
            href={`/blog?cat=${item.title}`}
            className={`${styles.category} ${item.slug}`}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}

            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
