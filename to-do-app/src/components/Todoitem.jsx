import styles from "./todoitem.module.css";
export default function TodoItem({ todo , todos , setTodos }) {

  function handleDelete() {
    const updatedTodo = todos.filter((task) => task !== todo);
    setTodos(updatedTodo);
  }

  function handleClick(){
    console.log(`Clicked on: ${todo.name}`);
    const updatedTodo = todos.map((task) => {
      if(task.name === todo.name){
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTodos(updatedTodo);  
  }
  return (
    <div className={styles.listItem}>
      <div className={styles.listText}>
        <span onClick={handleClick} className={todo.completed ? styles.completed : ""} >
          {todo.name}
        </span>
        <span
          onClick={handleDelete}
          className={styles.deleteButton}
        >
          x
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );

}
