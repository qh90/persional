import React from "react";
import styles from "./experience.module.scss";

type Props = {};

type ExperienceItemProps = {
  timeline: string;
  title: string;
  children: string;
};

function ExperienceItem({ timeline, title, children }: ExperienceItemProps) {
  return (
    <div className={styles.experienceItem}>
      <span className={styles.timeline}>{timeline}</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{children}</span>
    </div>
  );
}

export default function Experience({}: Props) {
  return (
    <div className={styles.container}>
      <h4>Experience</h4>
      <div className={styles.content}>
        <ExperienceItem timeline="2018 - 2023" title="Star Knowledge">
           Conceived and built 300+ optimized landing pages in HTML and CSS for integration and cross-browser compatibility
        and Created in-house 30+ web apps using Node, React, Next, Svelte and HTML/CSS that allowed employees to manage and recommend books
        and Analyzed 10+ existing software implementations to identify areas requiring
        and Managed 10+ development milestones from initial steps through final delivery
        and  Competed full redesigns of existing 10+ websites to improve navigation
        and Participated in 70+ weekly code reviews to ensure code quality and receive mentoring from senior developers
        and Wrote 50+ unit tests to verify the functionality of user interfaces, back-end processing, connectivity, and relational database interactions
        and Created a custom Typescript codegen to generate types for data that is returned from our CMS integration
        </ExperienceItem>
        <ExperienceItem timeline="2015 - 2018" title="AIWebDigners">
          I worked as Front-end developer about 1 year then I joined Back-end
          team. I experienced in React, Next, GraphQL when I was in Front-end
          and I’m currently using Golang and having experience in micro
          services, kubernetes and more.
        </ExperienceItem>
        <ExperienceItem timeline="2015 - 2015" title="Upwork">
          Participated in team-building activities to enhance working relationships.
          and Rewrote HTML to meet industry and company standards for SEO and accessibility and this drove a 150% increase in users by appearing on the first page of google search results
          and Utilized HTML, CSS, and JavaScript to create 70+ responsive landing pages for both company and client
          and Tested, debugged, and shipped 10s of 1000s of lines of code to various development teams and this lead to 100% bug-free deployment
        </ExperienceItem>
      </div>
    </div>
  );
}
