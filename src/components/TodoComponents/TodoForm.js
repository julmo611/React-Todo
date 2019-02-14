import React from 'react'


const TodoForm = props => {
    return (
 
        <form>
            <input
                type="text"
                name="task"
                value= {props.task}
                onChange = {props.handleChanges}
                />

                <button onClick={props.addTodo}>Add Todo</button>

            </form>
  );
};


 export default TodoForm;