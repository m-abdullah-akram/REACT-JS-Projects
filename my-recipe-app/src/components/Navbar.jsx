import styles from './cssStyles/nav.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                My Recipe App
            </div>

            <div className={styles.links}>
                <span className={styles.link}>Home</span>
                <span className={styles.link}>Recipes</span>
                <span className={styles.link}>About</span>
                <span className={styles.link}>Contact</span>
            </div>
        </nav>
    );
}