import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
  const [a, setA] = useState(["hey there sentry"]);
  const handleClick = () => {
    let b = [...a];
    b.push("her there");
    setA(b);
    throw new Error("ooops");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Owens Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {a.map((c, index) => {
          return <div key={index}>{c}</div>;
        })}
        <div>
          <button onClick={handleClick}>Click me</button>
        </div>
      </main>
    </div>
  );
}
