import styles from "./header.module.css"

export default function Header(){
    console.log("Header.jsx : Rendered");
    return (
        <>
            <div className={styles.header}> To Do App </div>
        </>
    )
}