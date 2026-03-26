import { useState } from "react";
import Form from "./Form";
import PrintTasks from "./PrintTasks";
import Footer from "./Footer";


export default function ToDo(){
const [todos, setTodos] = useState([]);

    return (
        <>
            <div>
                <Form todos={todos} setTodos={setTodos} />
                <PrintTasks todos={todos} setTodos={setTodos} />
            </div>
            <Footer todos={todos}/>
        </>
    )
}