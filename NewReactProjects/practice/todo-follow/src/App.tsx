import {useState} from 'react';

import TodoList from './components/TodoList';
import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {

    const newTodo = new Todo(text);

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
