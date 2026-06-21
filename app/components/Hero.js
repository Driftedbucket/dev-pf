import styles from "./Hero.module.css";

export default function(){
    return(
        <section className={styles.hero}>
            <h1 className={styles.title}>
                Awike G<span className={styles.dot}>.</span>
            </h1>
            <h2 className={styles.subtitle}>Web Developer</h2>
            <p className={styles.description}>
                Third Student at NUST currently studying towards a degree in computer science, specializing in software engineering.
                I also dedicate time to personal projects to further develop my skills.
                HMU fn.
            </p>
            <a href="#contact" className={styles.contactBtn}>Contact</a>
        </section>
    );
}