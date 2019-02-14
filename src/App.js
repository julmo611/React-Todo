import React from 'react';
// import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {

constructor(props) {
  super(props);
 
  this.state = {
    todos: todos,

    // inputValue: 
    task: "",
    id: "",
    completed: ""

  };
}



addTodo = e => {
  e.preventDefault(); 


const newTodo = {
  task: this.state.task,
  id: Date.now(),
  completed: false
};

  this.setState({
    todos: [ ...this.state.todos, newTodo],
    task: "",
    id:"",
    completed: ""

  });
};


toggleItem = (e, todoId) => {
  e.target.classList.toggle("complete");
  this.setState({
    todos: this.state.todos.map(todo => {
      if (todoId === todo.id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
      return todo;
      }
    })
  });
};




clearCompleted = e => {
  e.preventDefault();
  console.log('running!');
  this.setState({
    todos: this.state.todos.filter(todo => !todo.completed)
  });
};


handleChanges = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}





  render() {
    return (
      <div>
        
        <TodoList 
          todos={this.state.todos}
          toggleItem={this.toggleItem}
        />

          <TodoForm 
            addTodo={this.addTodo}
            task={this.state.task}
            id={this.state.id}
            completed={this.state.id}
            handleChanges={this.handleChanges}
          />
           <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;