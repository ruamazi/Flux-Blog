import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcom to <b>Flux.blog</b> here discover stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Unveiling the Wonders of Underwater Caves: A Hidden Paradise
          </h1>
          <p className={styles.postDesc}>
            Are you ready to dive into a world of enchantment? Join us as we
            explore the mesmerizing realm of underwater caves, where beauty
            meets mystery. These hidden gems beneath the surface offer a unique
            adventure for avid divers and nature enthusiasts alike. <br />
            Discovering the Unknown Underwater caves, also known as cenotes or
            blue holes, are natural formations that captivate with their
            ethereal beauty. These submerged wonders can be found in various
            locations around the world, from the Yucatan Peninsula in Mexico to
            the Bahamas and the Great Barrier Reef in Australia. These caves are
            the result of geological processes, such as the erosion of limestone
            over thousands of years. <br /> A Subterranean Wonderland As you
            descend into the depths, you ll be greeted by a world like no other.
            Crystal-clear turquoise waters, stalactites hanging from the
            ceilings, and a diverse array of marine life create a magical
            atmosphere. The play of light and shadows as the sun pierces through
            openings in the cave ceiling is a sight to behold. Its a realm that
            seems untouched by time, offering a glimpse into an ancient world.
            <br />
          </p>
          <button className={styles.postBtn}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
