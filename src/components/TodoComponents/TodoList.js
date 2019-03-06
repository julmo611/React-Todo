import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map( todoFromMap => (
                <Todo key={todoFromMap.id} todo={todoFromMap} toggleItem={props.toggleItem}  />
                )
               )
            }
        </div>
    );
};

export default TodoList;