import TodoItem from "./Todoitem";
import styles from "./printtodo.module.css";
export default function PrintTasks({ todos , setTodos }) {
    const sortedTodos = [...todos].sort((a, b) => Number(a.completed) - Number(b.completed));

    return (
        <div className={styles.list} >
            {sortedTodos.map((todo)=> <TodoItem key={todo.name} todo={todo} todos={todos} setTodos={setTodos}/>)}
        </div>
    )
}