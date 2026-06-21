import styles from ',/Sidebar.module.css';

const navItems = ['Auteur', 'Projects','Exp.', 'Certif.', 'Contact'];

export default function Sidebar(){
    return (<aside className={styles.sidebar}>
        <div className={styles.logo}>AG.</div>
        <nav className={styles.nav}>
            {navItems.map((item) =>(
                <a key={item} href={`#${item.toLowerCase()}`} className={styles.navItem}>
                    {item}
                </a>
            ))}
        </nav>
    </aside>
    )
}