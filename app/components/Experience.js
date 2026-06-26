"use client";
import {useEffect, useRef, useState} from react;
import styles from "./Experience.module.css";

const experiences = [
  {
    id: 1,
    role: "Distributed Systems Engineer",
    project: "Smart Public Transport Ticketing System",
    type: "Solo Academic Project",
    tags: ["Ballerina", "Apache Kafka", "MySQL", "Docker", "Microservices"],
    github: "https://github.com/Driftedbucket/kafka-ticketing-sytem",
    highlights: [
      "Designed and built 6 independent microservices from scratch (Passenger, Transport, Ticketing, Payment, Notification, Admin)",
      "Implemented event-driven communication between services using Apache Kafka producers and consumers",
      "Configured full Docker Compose orchestration for all services, Kafka broker, and MySQL database",
    ],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    project: "Iitulonge - Automated Grouping Platform",
    type: "Solo Academic Project",
    tags: ["FastAPI", "React", "Tailwind CSS", "MySQL", "JWT", "PyTest"],
    github: "https://github.com/SPS611S-2026/group27-automatic-grouping-system-itulonge",
    highlights: [
      "Built the entire system solo - frontend, backend, database, and authentication",
      "Implemented JWT-based authentication and a REST API with FastAPI",
      "Wrote PyTest test suites covering core grouping logic",
    ],
  },
  {
    id: 3,
    role: "Backend Developer",
    project: "Job-Connect - Student Job Board",
    type: "Group Project",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/WAD621S-2025/Job-Community-Board",
    highlights: [
      "Owned the full backend and database layer for a team-built web platform",
      "Designed the MySQL schema and PHP server-side logic connecting students to employers",
    ],
  },
  {
    id: 4,
    role: "Compiler Engineer",
    project: "Mini Compiler - CTE711S",
    type: "Solo Academic Project",
    tags: ["Compiler Design", "Lexical Analysis", "Parsing", "Semantic Analysis", "Code Generation"],
    github: "https://github.com/Driftedbucket/cte711s-mini-compiler",
    highlights: [
      "Implemented all 7 stages of a compiler independently: lexical analysis, parsing, AST construction, semantic analysis, IR generation, optimization, and code generation",
    ],
  },
  {
    id: 5,
    role: "ML Team Lead - Reinforcement Learning",
    project: "SARSA Gridworld (MDP) - ARI711S",
    type: "Group Project (Led Team)",
    tags: ["Python", "Reinforcement Learning", "SARSA", "MDP", "AI"],
    github: "https://github.com/Driftedbucket/ari711s-project",
    highlights: [
      "Assigned and coordinated tasks across group members",
      "Personally implemented the SARSA algorithm solution, modelling the gridworld as a Markov Decision Process",
    ],
  },
  {
    id: 6,
    role: "ML Team Lead - Computer Vision",
    project: "Traffic Sign Detection - ARI711S",
    type: "Group Project (Led Team)",
    tags: ["Python", "CNN", "GTSRB Dataset", "Computer Vision", "AI"],
    github: "https://github.com/Driftedbucket/ari711s-assignment",
    highlights: [
      "Coordinated team roles across all assignment parts",
      "Trained a CNN model to detect and classify traffic signs using the GTSRB benchmark dataset",
    ],
  },
  {
    id: 7,
    role: "Mobile Developer",
    project: "MAP Assignment",
    type: "Solo Academic Project",
    tags: ["Mobile", "Lifecycle Management", "Layered Architecture"],
    github: "https://github.com/angel2-star/MAP-assignment",
    highlights: [
      "Built all application layers independently",
      "Handled full lifecycle management of the mobile application",
    ],
  },
];

function ExperienceCard({exp, index}){
    const [visible, setVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(()=>{
        const observer = new  InntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setTimeout(()=>setVisible(true), index*120);
                    observer.disconnect();
                }
            },{threshold: 0.15}
        );
        if(cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect;
    }, [index]);

    return(
        <div ref={cardRef} className={`${styles.card} ${visible ? styles.cardVisible : ""}`}>
             <div className={styles.dot} />

      <div className={styles.cardInner}>
        <div className={styles.cardHeader}>
          <div>
            <span className={styles.type}>{exp.type}</span>
            <h3 className={styles.role}>{exp.role}</h3>
            <p className={styles.project}>{exp.project}</p>
          </div>
          <a
            href={exp.github}
            target="_blank"
            rel="noreferrer"
            className={styles.githubLink}
          >
            <FaGithub /> GitHub
          </a>
        </div>

        <ul className={styles.highlights}>
          {exp.highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className={styles.tags}>
          {exp.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
        </div>
    )
}