import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";

const getData = async (slug) => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res) {
    throw new Error("failed to fetch data on slug page component!");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  const { title, desc, img, views, createdAt, user } = data;
  const fixedDate = createdAt.substring(0, 10).split("-").reverse().join("-");

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImgContainer}>
                <Image
                  className={styles.avatar}
                  src={user.image}
                  alt="profile picture"
                  width={50}
                  height={50}
                />
              </div>
            )}

            <div className={styles.userTxtContainer}>
              <span className={styles.username}>{user.name} </span>
              <span className={styles.date}>{fixedDate}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imgContainer}>
            <Image src={img} alt="picture" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: desc }}
          />

          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
