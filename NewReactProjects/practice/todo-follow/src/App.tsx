import {useState} from 'react';

import TodoList from './components/TodoList';
// import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {

    const newTodo = new Todo(todoText);

    setTodos((previousTodos) => {
      return previousTodos.concat(newTodo);
    });

  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
