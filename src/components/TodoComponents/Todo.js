import React from 'react';

import './Todo.css';


const Todo = props => {
    return (
        <div onClick={(e) => props.toggleItem(e, props.todo.id)}
         >
            {props.todo.task} 
            
            
        </div>  
    );
}



export default Todo;