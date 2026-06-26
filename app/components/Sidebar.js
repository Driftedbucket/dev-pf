import styles from './Sidebar.module.css';

const navItems = ['About', 'Projects', 'Exp.', 'Academics', 'Certif.', 'Contact'];

export default function Sidebar(){
    return (<aside className={styles.sidebar}>
        <div className={styles.logo}>AG.</div>
        <nav className={styles.nav}>
            {navItems.map((item) =>(
                <a key={item} href={`#${item==='Exp.' ? 'exp' : item.toLowerCase()}`} className={styles.navItem}>
                    {item}
                </a>
            ))}
        </nav>
    </aside>
    )
}