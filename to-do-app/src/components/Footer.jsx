import styles from "./footer.module.css"

export default function Footer({ todos }){
    console.log("Footer.jsx : Rendered");
    return (
        <>
            <div className={styles.mainFoot}>
                <span className={styles.total}>Total ToDos : {todos.length}</span>
                <span className={styles.completed}>Completed ToDos: {todos.filter(todo => todo.completed).length}</span>
            </div>
        </>
    )
}