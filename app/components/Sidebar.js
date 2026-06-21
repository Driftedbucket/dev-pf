const navItems = ['Auteur', 'Projects','Exp.', 'Certif.', 'Contact'];

export default function Sidebar(){
    <aside>
        <div></div>
        <nav>
            {navItems.map((item) =>(
                <a key={item} href={`#${item.toLowerCase()}`} className={styles.navItem}>
                    {item}
                </a>
            ))}
        </nav>
    </aside>
}