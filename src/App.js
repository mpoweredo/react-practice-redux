import './App.css';
import AddTodo from './components/Todo/AddTodo';
import TodoList from './components/Todo/TodoList';

function App() {
  return (
    <div className="app">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
