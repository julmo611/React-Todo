import React from 'react'


const TodoForm = props => {
    return (
        <div>
        <h2>Create your list here<br/> <i class="fas fa-angle-double-down"></i></h2>
        
        <form>
            <input
                type="text"
                name="task"
                value= {props.task}
                onChange = {props.handleChanges}
                />

                <button onClick={props.addTodo}><i class="fas fa-list-ul"></i> Add To Do</button>

            </form>
        </div>
  );
};


 export default TodoForm;