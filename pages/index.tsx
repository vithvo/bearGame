import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Start.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BearGamePicture</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="images/BearLogo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <div className={styles.container}>
        <img src="images/bearMain.png" alt="bear" className={styles.bearImage} />
        <img src="images/bearMain3.png" alt="bear" className={styles.bearImage3} />
        <h1 className={styles.title}>Bear Picture</h1>
        <p className={styles.subTitle}>
          Сыграй с друзьями в игру.
          <br /> Поймут ли они что ты загадал?
        </p>
        <button className={styles.startButton}>Создать игру</button>
      </div>
    </div>
  );
};

export default Home;
