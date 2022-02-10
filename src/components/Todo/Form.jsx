import { useState } from 'react';
import './todo.css';

const Form = (props) => {
    const [text, setText] = useState("");

    const submitTodo = (e) =>{
       props.add({task: text});
       return setText("");
    };

    return (
        <div className="insert">
            <input 
                type="text" 
                min={5}
                placeholder="Insira a tarefa..."
                value={text}
                onChange = {e => setText(e.target.value)}
             />
            <button disabled={!text} onClick={submitTodo}>
                ADD
             </button>
        </div>
    );
};

export default Form;