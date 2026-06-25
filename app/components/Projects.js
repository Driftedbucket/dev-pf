"use client";
import {useEffect, useRef, useState} from "react";
import {FaGithub, FaExternalAlt} from "react-icons/fa";
import styles from "./Projects.module.css";

const projects=[
    {
        id:1,
        title:"Movie Library",
        description:"A movie library app powered by the IMDB API with dynamic search and filtering",
        tags:["React", "fetchAPI"],
        github:"https://github.com/Driftedbucket/movie-library-react",
        image:null,
        featured:true
    },
    {
        id:2,
        title:"Job-connect",
        description:"A web-based platform created to connect students/job-seekers to employers",
        tags:["PHP","MySQL","Javascript","HTML5","CSS3"],
        github:"https://github.com/WAD621S-2025/Job-Community-Board",
        image:null,
        featured:true
    },
    {
        id:3,
        title:"Iitulonge",
        description:"An automated(not ai-powered) web-based grouping platform created to assist lecturers in creating and managing project/assignment groups more efficiently",
        tags:["FastAPI","MySQL", "JWT", "PyTest", "React", "TailwindCSS"],
        github:"https://github.com/SPS611S-2026/group27-automatic-grouping-system-itulonge",
        image:null,
        featured:true
    }
]

const featured = projects.find((p) =>p.featured);
const rest = projects.filter((p) => !p.featured);

function imagePlaceholder({title}){
    return(
        <div className={styles.placeholder}>
            <span>{title}</span>
        </div>
    );
}

function ProjectCard({project, index}){
    const [visible, setVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() =>{
        const observer = new IntersectionObserver(
            ([entry]) =>{
                if(entry.isIntersecting){
                    setTImeout(()=>setVisible(true), index*100);
                    observer.disconnect();
                }
            },{threshold:0.1}
        );
        if(cardRef.current) observer.observe(cardRf.current);
        return ()=> observer.disconnect();
    }, [index]);

    return(
        <div ref={cardRef} className={`${stryles.card} ${visible ? styles.cardVisible: ""}`}>
            <div className={styles.cardImage}>
                {project.image ? (
                    <img src={project.image} alt={project.title}/>
                ):(
                    <ImagePlaceHolder title={project.title}/>
                )}
                <div className={styles.cardOverlay}>
                    <p className={styles.overlayDesc}>{project.description}</p>
                    <div className={styles.overlayTags}>
                        {projects.tags.map(() => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                    
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.overlayGithub}
                    <a>
                    <FaGithub/>View on Github
                    </a>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <h3 className={styles.cardTitle}>{project.Title}</h3>
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.cardLink}
        <a>
          <FaGithub />
        </a>
            </div>

        </div>
    );
}

export default function Projects(){
    const sectionRef = useRef(null);
    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() =>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                   setHeaderVisible(true);
                   observer.disconnect(); 
                }
            },
        {threshold:0.1}
    );
    if(sectionRef.current) observer.observe(sectionRef.current);
    return ()=>observe.disconnect();
    },[]);

    return(
      <section id="projects" ref={sectionRef} className={styles.projects}>
      <div className={styles.inner}>
        <h2 className={`${styles.sectionTitle} ${headerVisible ? styles.titleVisible : ""}`}>
          My <span>Projects</span>
        </h2>

        {featured && (
          <div className={`${styles.featured} ${headerVisible ? styles.featuredVisible : ""}`}>
            <div className={styles.featuredImage}>
              {featured.image ? (
                <img src={featured.image} alt={featured.title} />
              ) : (
                <imagePlaceholder title={featured.title} />
              )}
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.featuredBadge}>Featured Project</span>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.featuredDesc}>{featured.description}</p>
              <div className={styles.featuredTags}>
                {featured.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              
                href={featured.github}
                target="_blank"
                rel="noreferrer"
                className={styles.featuredGithub}
              <a>
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        )}

        <div className={styles.grid}>
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>  
    );
}

