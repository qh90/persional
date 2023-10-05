import React from "react";
import styles from "./about-me.module.scss";

type Props = {};

export default function AboutMe({}: Props) {
  return (
    <div className={styles.container}>
      <h4>About Me</h4>
      <div className={styles.text}>
        <p>
          Hi, I am Rocky. I am a Senior Full Stack Developer.
          <br />
          <br />
          I graduated from Duke University Computer Science & Engineering at
          2015. I've been interested in computers and programming since my
          childhood. Coding and design, which I started with curiosity and
          passion, is now a big part of my life.
          <br />
          <br />
          I can describe myself as a Geek. Computer games, movies, comics,
          science fiction and fantasy books are my interests that I spare time
          in my daily life.
          <br />
          <br />
          I took the first step into the software world with web designing at my
          early ages and I am
          working as developer professionally for 8 years.
          <br />
          <br />I am mainly interested in front-end development by using React,
          Svelte, Next, Vue and back-end development by using Golang, Python, PHP.
        </p>
      </div>
    </div>
  );
}
