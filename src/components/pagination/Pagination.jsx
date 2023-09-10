"use client";
import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        onClick={() => router.push(`?page=${page - 1}`)}
        className={styles.btn}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        onClick={() => router.push(`?page=${page + 1}`)}
        className={styles.btn}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
