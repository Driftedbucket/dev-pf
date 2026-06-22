import {useState, useEffect, useRef} from 'react';
import styles from './About.module.css';

const stack = [
  { name: 'Git / GitHub',    percent: 90 },
  { name: 'HTML / CSS',      percent: 75 },
  { name: 'JavaScript',      percent: 75 },
  { name: 'Node.js',         percent: 75 },
  { name: 'Java',            percent: 75 },
  { name: 'React / Next.js', percent: 50 },
  { name: 'Python',          percent: 50 },
  { name: 'MySQL',           percent: 60 },
  { name: 'PostgreSQL',      percent: 55 },
  { name: 'MongoDB',         percent: 55 },
  { name: 'PHP',             percent: 40 },
  { name: 'Supabase',        percent: 40 },
  { name: 'Tailwind CSS',    percent: 25 },
  { name: 'Framer Motion',   percent: 25 }
];

export default function About(){
    const [animated, setAnimated] = useState(false);
    const sectionRef = useRef(null); //only poinitng to the <section> DOM eleement

    useEffect(() =>{
        const observer = new IntersectionObserver(
            (entry)=>{
                if(entry.isIntersecting){
                    setAnimated(true);
                    obsever.disconnect();
                }
            },{thresholde:0.2} //only triggers when 20% of the section is vissiblel
        );

        if(sectionRef.current) observer.observe(sectionRef.current);
        return ()=>observer.disconnet();
    })
    
    return(
        <div></div>
    )
}