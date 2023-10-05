import React from "react";
import styles from "./styles.module.scss";
import GithubIcon from "@/assets/github";
import InstagramIcon from "@/assets/instagram";
import LinkedinIcon from "@/assets/linkedin";
import TwitterIcon from "@/assets/twitter";

type Props = {
  theme: string | undefined;
};

export default function SocialMediaIcons({ theme }: Props) {
  return (
    <div className={styles.icons}>
      <a href="https://github.com/midasRocky" target="_blank" rel="noreferrer">
        <GithubIcon fill={theme === "dark" ? "#fff" : "#000"} />
      </a>
      <a
        href="https://www.linkedin.com/in/rocky-harris-622650294/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon fill={theme === "dark" ? "#fff" : "#000"} />
      </a>
    </div>
  );
}
