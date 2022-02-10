import { useState } from "react";
import Header from "../components/Header";
import FormTodo from "../components/Todo/Form";
import TodoItem from "../components/Todo/Item";

const Todo = () => {
    const [showForm, setShowForm] = useState(false);
    const [todoItem, setTodoItem] = useState([]);

    const AddTask = (task) => setTodoItem([...todoItem, task]);

    return (
        <div id="todo">  
            <Header handle={setShowForm} value={showForm} />
            {showForm ? (<FormTodo add={AddTask} />) : null }

            {todoItem.map((item,i) => (
                <TodoItem key={i} text={item.task}/>
            ))}
        </div>
    ) 
};

export default Todo;