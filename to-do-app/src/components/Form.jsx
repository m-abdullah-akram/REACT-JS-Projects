import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [input, setInput] = useState("");
  const [input, setInput] = useState({name:"", completed: false});
  function handleSubmit(e) {
    e.preventDefault();
    if (input.name.trim() === "") return;
    setTodos([...todos, input]);
    setInput({name:"", completed: false});
    console.log(`Form.jsx : ${todos}`);
  }
  return (
    <>
      <form className={styles.mainform} onSubmit={handleSubmit}>
        <div className={styles.mainDiv}>
          <input
            onChange={(e) => {
              setInput({name: e.target.value, completed: false});
            }}
            type="text"
            value={input.name}
            placeholder="Enter task here"
            className={styles.modernInput}
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
