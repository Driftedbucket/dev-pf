"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./About.module.css";

const stack = [
  { name: "Git / GitHub", percent: 90 },
  { name: "HTML / CSS", percent: 75 },
  { name: "JavaScript", percent: 75 },
  { name: "Node.js", percent: 75 },
  { name: "Java", percent: 75 },
  { name: "React / Next.js", percent: 50 },
  { name: "Python", percent: 50 },
  { name: "MySQL", percent: 60 },
  { name: "PostgreSQL", percent: 55 },
  { name: "MongoDB", percent: 55 },
  { name: "PHP", percent: 40 },
  { name: "Supabase", percent: 40 },
  { name: "Tailwind CSS", percent: 25 },
  { name: "Framer Motion", percent: 25 },
];

const hobbies = [
  {id:1, hobby: "Music"},
  {id:2, hobby:"Trading"},
  {id:3, hobby:"Reading"},
  {id:4, hobby:"Gaming(combat and sports)"},
  {id:5, hobby:"Music"}
];

export default function About() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null); //only poinitng to the <section> DOM eleement

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }, //only triggers when 20% of the section is vissiblel
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <h2 className={styles.sectionTitle}>
        About<span>Me</span>
      </h2>

      <div className={styles.content}>
        <div className={styles.leftHalf}>
          <div className={styles.bio}>
            <p>
              Olah, I'm <strong>Awike Gulu</strong> ~ a 3rd year Computer
              Science student at NUST (Namibia University of Science and
              Technology), specializing in Software Engineering.
            </p>
            <p>
              I build web applications with a focus on clean UI and solid
              fundamentals. Currently leveling up my full-stack skills through
              personal projects and coursework, with a particular interest in
              React ecosystems and backend APIs.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new tools, contributing
              to group projects, or figuring out how to make things look better
              than they need to.
            </p>
          </div>
        <div id="hobbies" className={styles.hobbies}>
          <div className={styles.hobbiesText}>
            <h2>
              Ho<span>bbi</span>es
            </h2>
          </div>
          <div className={styles.hobbiesList}>
           
           {/*  {hobbies.map((hobby)=>(
                <span key={hobby.id}>{hobby.name}</span>
            ))} */}
          </div>
        </div>
        </div>
        <div className={styles.rightHalf}>
          <div className={styles.stack}>
            <h3 className={styles.stackTitle}>Tech Stack</h3>
            {stack.map((item) => (
              <div key={item.name}>
                <div className={styles.barLabel}>
                  <span>{item.name}</span>
                  <span>{item.percent}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: animated ? `${item.percent}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
