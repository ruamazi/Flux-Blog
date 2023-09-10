"use client";
import { useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const err = new Error(data.message);
    throw err;
  }
  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, isLoading, mutate } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");
  const handleSubmitComnt = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    setDesc("");
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            className={styles.inpt}
            placeholder="Leave a comment..."
          />
          <button onClick={handleSubmitComnt} className={styles.btn}>
            Submit
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className={styles.commentsList}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.map((item) => (
            <div key={item._id} className={styles.cmnt}>
              <div className={styles.user}>
                <div className={styles.userInfo}>
                  {item?.user?.image && (
                    <Image
                      className={styles.img}
                      src={item.user.image}
                      alt="user profile image"
                      width={50}
                      height={50}
                    />
                  )}
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>
                    {item?.createdAt
                      .substring(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
                  </span>
                </div>
                <div className={styles.desc}>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
