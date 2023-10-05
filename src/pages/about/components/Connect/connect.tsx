import React from "react";
import styles from "./connect.module.scss";

type Props = {};

function Link({ text, href }: { text: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}

export default function Connect({}: Props) {
  return (
    <div className={styles.container}>
      <h4 id="connect">Connect</h4>
      <div className={styles.links}>
        <Link href="https://www.linkedin.com/in/rocky-harris-622650294/" text={"Linkedin"} />
        <Link href="https://github.com/midasRocky" text={"Github"} />
        <Link
          href="mailto:midasRocky3@gmail.com"
          text={"midasRocky@gmail.com"}
        />
      </div>
    </div>
  );
}
