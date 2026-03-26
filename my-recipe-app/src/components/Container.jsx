import styles from "./cssStyles/container.module.css";

export default function Container({children}) {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    );
}