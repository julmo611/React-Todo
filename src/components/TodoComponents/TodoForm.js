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
                <button onClick={props.clearAll}>Clear All</button>

            </form>
  );
};


 export default TodoForm;