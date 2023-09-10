"use client";
import { useEffect, useState } from "react";
import styles from "./writePage.module.css";
import "react-quill/dist/quill.bubble.css";
import { BiImageAdd, BiLinkExternal, BiAddToQueue } from "react-icons/bi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import dynamic from "next/dynamic";

const getTime = new Date().getTime();

const WritePage = () => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const uniqueFileName = getTime + file.name;
      const storageRef = ref(storage, uniqueFileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handlePublish = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: getTime + "-" + slugify(title),
        catSlug: catSlug,
      }),
    });
    router.push("/");
  };

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.inpt}
        type="text"
        placeholder="Title goes here..."
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className={styles.editor}>
        <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
          <BiAddToQueue className={styles.reactIcon} />
        </button>
        {isOpen && (
          <div className={styles.add}>
            <input
              type="file"
              id="imgFile"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button type="button" className={styles.AddBtn}>
              <label htmlFor="imgFile">
                <BiImageAdd />
              </label>
            </button>
            <button className={styles.AddBtn}>
              <BiLinkExternal />
            </button>
            <button className={styles.AddBtn}>
              <AiOutlineVideoCameraAdd />
            </button>
            <select
              className={styles.select}
              onChange={(e) => setCatSlug(e.target.value)}
            >
              <option value="style">style</option>
              <option value="fashion">fashion</option>
              <option value="food">food</option>
              <option value="culture">culture</option>
              <option value="travel">travel</option>
              <option value="coding">coding</option>
            </select>
            <button className={styles.publishBtn} onClick={handlePublish}>
              Publish
            </button>
          </div>
        )}

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
        />
      </div>
    </div>
  );
};

export default WritePage;
