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

constructor() {
  super();
 
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

// clearAll = e => {
//   e.preventDefault();
//   let todos = this.state.todos.slice();
//   todos = todos.filter(todo => !todo.completed);
//   this.setState({ todos });
// }

handleChanges = e => {
  console.log(e.target.value);

  this.setState({
    [e.target.name]: e.target.value
  })
}



  render() {
    return (
      <div>
        
        <TodoList 
          todos={this.state.todos}
        />

          <TodoForm 
            addTodo={this.addTodo}
            task={this.state.task}
            id={this.state.id}
            completed={this.state.id}
            handleChanges={this.handleChanges}
          />
        

      </div>
    );
  }
}

export default App;