"use client";
import {useState, useEffect, useRef} from "react";
import {HiOutlineDownload} from "react-icons/hi";
import {FaUinversity} from "react-icons/fa";
import styles from "./Academics.module.css";

const modules=[
  { name: "Data Structures and Algorithms 1", grade: "Merit" },
  { name: "Database Fundamentals", grade: "Distinction" },
  { name: "Database Programming", grade: "Distinction" },
  { name: "Data Structures and Algorithms 2", grade: "Distinction" },
  { name: "Web Application Development", grade: "Distinction" },
  { name: "Compiler Techniques", grade: "Distinction" },
  { name: "Mobile Application Development", grade: "Distinction" },
  { name: "Software Design", grade: "Distinction" },
  { name: "Distributed Systems and Applications", grade: "Distinction" }
];

function gradeClass(grade){
    if(grade==="Distinction") return styles.distinction;
    if(grade==="Merit") return styles.merit;
    return styles.pass;
}

export default function Academics(){
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                setVisible(true);
                observer.disconnect();
            }
        },{threshold: 0.15}
    );if(sectionRef.current) observer.observe(sectionRef.current);
    return ()=>observer.disconnect();
    },[]);

    return(
        <section id="academics" ref={sectionRef} className={styles.academics}>
      <div className={styles.inner}>
        <h2 className={`${styles.sectionTitle} ${visible ? styles.titleVisible : ""}`}>
          My <span>Academics</span>
        </h2>

        <div className={`${styles.certificate} ${visible ? styles.certificateVisible : ""}`}>
          {/* decorative corner accents — gives the "certificate" feel */}
          <span className={`${styles.corner} ${styles.cornerTL}`} />
          <span className={`${styles.corner} ${styles.cornerTR}`} />
          <span className={`${styles.corner} ${styles.cornerBL}`} />
          <span className={`${styles.corner} ${styles.cornerBR}`} />

          <div className={styles.certHeader}>
            <FaUniversity className={styles.uniIcon} />
            <p className={styles.uniName}>
              Namibia University of Science and Technology
            </p>
            <h3 className={styles.degree}>
              BSc. Computer Science — Software Engineering
            </h3>
            <p className={styles.year}>3rd Year · In Progress</p>
          </div>

          <div className={styles.averageBlock}>
            <span className={styles.averageLabel}>Current Average</span>
            <span className={styles.averageValue}>73.4%</span>
          </div>

          <div className={styles.divider} />

          <div className={styles.modules}>
            <span className={styles.modulesLabel}>Key Modules</span>
            <div className={styles.modulesList}>
              {modules.map((mod) => (
                <div key={mod.name} className={styles.moduleRow}>
                  <span className={styles.moduleName}>{mod.name}</span>
                  <span className={`${styles.gradeBadge} ${gradeClass(mod.grade)}`}>
                    {mod.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="/academic-record.pdf"
            download
            className={styles.downloadBtn}
          >
            <HiOutlineDownload /> Download Academic Record
          </a>
        </div>
      </div>
    </section>
    )
}
