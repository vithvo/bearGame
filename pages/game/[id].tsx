import type { NextPage } from "next";
import Head from "next/head";
import { Canvas } from "../../components/Canvas";

import styles from "./game.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Игра</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/BearLogo.svg" />
      </Head>
      <div className={styles.game}>
        <div className={styles.chat}>
          <div className={styles.chatTitle}>Чат</div>

          <div className={styles.chatMessage}>
            <div className={styles.chatItem}>
              <b>Vanya Van</b>
              <p>I am win</p>
            </div>
          </div>
          <div className={styles.chatInput}>
            <input type="text" />
            <button>Send</button>
          </div>
        </div>

        <div className={styles.canvas}>
          <Canvas />
        </div>
      </div>
    </div>
  );
};

export default Home;
