"use client"
import styles from "./Hero.module.css";
import {useState, useEffect} from 'react';
const FULL_TEXT="Hi, I'm Awike Gulu"
const TYPING_SPEED = 80;

export default function Hero(){
    const [displayedText, setDisplayedText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(()=>{
        let i=0;
        const interval =setInterval(()=>{
            setDisplayedText(FULL_TEXT.slice(0,i+1));
            i++;
            if(i===FULL_TEXT.length) clearInterval(interval);
        }, TYPING_SPEED);
        return () => clearInterval(interval);
    }, [])
    
    useEffect(()=>{
        const blink = setInterval(()=>{
            setCursorVisible((v)=>!v);
        }, 530);
        return ()=>clearInterval(blink);
    }, []);

    return(
        <section className={styles.hero}>
            <h1 className={styles.title}>
                {displayedText}
                <span className={styles.cursor} style={{opacity:cursorVisible?1:0}}>.</span>
            </h1>
            <h2 className={styles.subtitle}>Web Developer</h2>
            <p className={styles.description}>
                Third year Student at NUST currently studying towards a degree in computer science, specializing in software engineering.
                I also dedicate time to personal projects to further develop my skills.
                HMU fn.
            </p>
            <a href="#contact" className={styles.contactBtn}>Contact</a>
        </section>
    );
}