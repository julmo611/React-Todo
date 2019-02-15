import React from 'react';

import './Todo.scss';


const Todo = props => {
    return (
        <div className={"todo-item"} onClick={(e) => props.toggleItem(e, props.todo.id)} >
            {props.todo.task} 
            
            
        </div>  
    );
}



export default Todo;